import { useStorage } from "@plasmohq/storage"

function IndexPopup() {
  const [privateAddress, setPrivateAddress] = useStorage("private_address", "")
  const [teamUuids, setTeamUuids] = useStorage("team_uuids", "")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      私有部署地址：<input onChange={(e) => setPrivateAddress(e.target.value.trim())} value={privateAddress}/>
      团队UUID：<input onChange={(e) => setTeamUuids(e.target.value.trim())} value={teamUuids}/>

      <a href="https://github.com/k8scat/ones-link" target="_blank" style={{ marginTop: 10 }}>使用说明</a>
    </div>
  )
}

export default IndexPopup
