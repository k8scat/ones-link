import { isSaasUrl } from './helper';

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    const url = details.url
    if (!isSaasUrl(url)) {
        return
    }

    chrome.storage.sync.get(["private_address", "team_uuids"]).then((value) => {
        let addr = value["private_address"]
        let teamUuids = value["team_uuids"]
        if (addr === undefined) {
            return
        }

        let addrStr: string
        try {
            addrStr = JSON.parse(addr)
        } catch (e) {
            console.error("JSON.parse failed:", addr, e)
            return
        }
        if (url.startsWith(addrStr)) {
            return
        }
        
        let teamUuidsStr = ""
        if (teamUuids !== undefined) {
            try {
                teamUuidsStr = JSON.parse(teamUuids)
            } catch (e) {
                console.warn("JSON.parse failed:", teamUuids, e)
            }
        }
        
        let items = url.split("/")
        const teamUuid = items[6]
        if (teamUuidsStr === "" || teamUuidsStr.includes(teamUuid)) {
            items = items.slice(3)
            items.splice(0, 0, addrStr)
            const redirectUrl = items.join("/")
            console.log("redirect:", redirectUrl)
            chrome.tabs.update(details.tabId, { url: redirectUrl })
        }
    })
})
