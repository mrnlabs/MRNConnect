import { JitsiMeeting } from "@jitsi/react-sdk";

export default function MRNConnect() {
    return (
    <div>
        <JitsiMeeting
            domain = { import.meta.env.VITE_JITSI_DOMAIN }//we will have to host it ourselves at some point
            roomName = "MRN Connect"
            configOverwrite = {{
                startWithAudioMuted: true,
                disableModeratorIndicator: true,
                startScreenSharing: true,
                enableEmailInStats: false
            }}
            interfaceConfigOverwrite = {{
                DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
            }}
            userInfo = {{
                displayName: 'MRN User'
            }}
            onApiReady = { (laravelApi) => {
                // we will go to laravel
            } }
            getIFrameRef = { (iframeRef) => { 
                iframeRef.style.height = '700px';
                iframeRef.style.width = '80vw';
                } }
        />
    </div>
    )
}