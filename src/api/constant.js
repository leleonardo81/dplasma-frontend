export const serverlessBaseUrl = "https://asia-southeast2-ta-leonardo.cloudfunctions.net";
export const monolithBaseUrl = "";
// export const hybridBaseUrl = "";

const server = JSON.parse(localStorage.getItem('server'));
export const serverList = ["", monolithBaseUrl, "", serverlessBaseUrl];
export const baseUrl = serverList[server];