export const isSaasUrl = (url: string) => {
    return url.startsWith("https://ones.ai") ||
        url.startsWith("https://ones.cn/") ||
        url.startsWith("https://ones.com/")
}
