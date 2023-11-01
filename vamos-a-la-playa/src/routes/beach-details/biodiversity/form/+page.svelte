
Aquí puedes ingresar tus avistamientos de flora y fauna nativa. Para esto debes considerar:

-Tu registro debe ser acompañado por una fotografía lo más nítida posible para que sea validado por nuestro equipo

-Asegúrate de registrar la especie correcta en la playa correcta, ya que tus registros alimentan nuestra base de datos para futuros usuarios

<!-- add a form of input Playa, fecha, organismo, observaciones, y subir foto o tomar foto -->

<label for="beach">Playa</label>
<select name="beach" id="beach">
    <option value="1">Playa de la Concha</option>
    <option value="2">Playa de la Zurriol</option>
    <option value="3">Playa de la Ondarret</option>
    <option value="4">Playa de la Conch</option>
</select>

<label for="date">Fecha</label>
<input type="date" name="date" id="date" />

<label for="organism">Organismo</label>
<input type="text" />

<label for="observations">Observaciones</label>
<textarea name="observations" id="observations" cols="30" rows="10"></textarea>

<label for="photo">Foto</label>
<input type="file" name="photo" id="photo" />

<label for="take">Tomar foto</label>
<input type="button" name="take" id="take" value="Tomar foto" />