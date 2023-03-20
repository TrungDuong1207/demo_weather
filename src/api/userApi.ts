import axiosClient from "./axiosClient";

const userApi = {
    getUser(params: any) {
        const url = "/";
        return axiosClient.get(url, { params })
    }
}

export default userApi;