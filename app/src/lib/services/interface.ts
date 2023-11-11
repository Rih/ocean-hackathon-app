interface BaseService {
    base_url: string;
    uri: string;
    fetchAll?: (page: number) => Promise<any[]>;
    fetchData?: (uriParams: Record<string, any>, page: number) => Promise<{hasMore: boolean; data: any[]}>;
}

export default BaseService;