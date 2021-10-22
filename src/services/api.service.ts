import http from "../http-common";

class ApiDataService {
    getPage(pageName: string): Promise<any> {
        return http.get(`/page/${pageName}`)
    };

    getNavigation(): Promise<any> {
        return http.get('/page/navigation')
    };
}

export default new ApiDataService();
