import http from "../http-common"
import { ContentPageType } from "../types/ContentPage.type";

class ApiDataService {
    getPage(pageName: string): Promise<any> {
        return http.get(`/page/${pageName}`)
    }
}

export default new ApiDataService();
