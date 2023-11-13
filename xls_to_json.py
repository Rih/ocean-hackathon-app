import pandas as pd
import json

def excel_to_json(file_path):
    
    # data = pd.read_csv(file_path, sep=',')
    data = pd.read_csv(file_path, sep='\t')
    json_data = []
    df = data.dropna(subset=['Playa'], axis='index')
    df['Sigla IUCN'].fillna(value='NE', inplace=True)
    df['Autor foto'].fillna(value='Sin autor', inplace=True)
    print(df.tail())
    for i, row in df.iterrows():
        if str(row['Playa']).startswith('http'):
            continue
        playa = row['Playa']
        grupo = row['Grupo']
        nombre_comun = row['Nombre común']
        nombre_especifico = row['Nombre específico']
        foto = row['Foto']
        imagen = row['Imagen']
        autor_foto = row['Autor foto']
        descripcion = row['Descripción (APP) - 200 a 250 caract']
        estado_conservacion = row['Estado de conservación (IUCN 2016)']
        estado_sigla = row['Sigla IUCN']
        beach = {
            'Desembocadura': 1,
            'Desembocadura Biobío': 1,
            'Trocadero': 2,
            'Lenga': 3,
            'Punta Choros': 4,
        }
        entity = {
            'Aves': 1,
            'Mamíferos': 2,
            'Reptiles': 3,
            'Anfibios': 4,
            'Invertebrados marinos': 5,
            'Plantas terrestres': 6,
            'Algas': 7,
        }
        json_obj = {
            'id': i + 1,
            'beachId': beach[playa],
            'entityId': entity[grupo],
            # 'group': grupo,
            'name': nombre_comun,
            'scientific_name': nombre_especifico,
            'image': "",
            'author': autor_foto,
            'details': descripcion,
            'conservation_status': 'NE' if estado_sigla == '' else estado_sigla,
        }
        
        json_data.append(json_obj)
    
    return json.dumps(json_data)

# Ejemplo de uso
excel_file_path = 'Diversidad_playas_consolidado_solo_app.tsv'
json_data = excel_to_json(excel_file_path)
with open('playas.json', 'w') as outfile:
    outfile.write(json_data)