import http from "../http-common"

class ApiDataService {
    getPage(pageName: string) {
        return http.get(`/page/${pageName}`)
    }
}

export default new ApiDataService();
