// export const serverlessBaseUrl = "https://us-east4-new-ta-leonardo.cloudfunctions.net";
export const monolithBaseUrl = "https://dplasma.leonardo.web.id";
// export const hybridBaseUrl = "https://new-ta-leonardo.uk.r.appspot.com";
export const serverlessBaseUrl = "https://us-east4-kafka-cluster-1.cloudfunctions.net";
export const hybridBaseUrl = "https://kafka-cluster-1.uc.r.appspot.com";

const server = JSON.parse(localStorage.getItem('server'));
export const serverList = ["", monolithBaseUrl, hybridBaseUrl, serverlessBaseUrl];
export const baseUrl = serverList[server];