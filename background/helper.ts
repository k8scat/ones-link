export const beforeNaviFilters = {
    url: [
        {hostEquals: "ones.ai"},
        {hostEquals: "ones.cn"},
        {hostEquals: "ones.com"}
    ]
}

export const StorageKeyPrivateAddress = "private_address"
export const StorageKeyTeamUuids = "team_uuids"

const parseAddr = (value: any): string => {
    if (value === undefined) {
        return ""
    }
    let addr: string
    try {
        addr = JSON.parse(value) as string
    } catch (e) {
        console.error("JSON.parse failed:", value, e)
        return ""
    }
    addr = addr.trim().replace(/(\/)+$/, "")
    return addr
}

const parseTeamUuids = (value: any): string => {
    if (value === undefined) {
        return ""
    }
    let uuids: string
    try {
        uuids = JSON.parse(value) as string
    } catch (e) {
        console.error("JSON.parse failed:", value, e)
        return ""
    }
    return uuids.trim()
}

export const beforeNaviCallback = (details: chrome.webNavigation.WebNavigationParentedCallbackDetails) => {
    console.log("beforeNavi:", details)
    const url = details.url
    
    chrome.storage.sync.get([StorageKeyPrivateAddress, StorageKeyTeamUuids]).then((value) => {
        let addr = parseAddr(value[StorageKeyPrivateAddress])
        if (addr === "" || url.startsWith(addr)) {
            return
        }

        let teamUuids = parseTeamUuids(value[StorageKeyTeamUuids])
        
        let items = url.split("/")
        const teamUuid = items[6]
        console.log("teamUuid in url:", teamUuid)
        if (teamUuids === "" || teamUuids.includes(teamUuid)) {
            items.splice(0, 3, addr)
            const redirectUrl = items.join("/")
            console.log("redirect:", redirectUrl)
            chrome.tabs.update(details.tabId, { url: redirectUrl })
        }
    })
}
