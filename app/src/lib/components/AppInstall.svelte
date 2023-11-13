<script lang="ts">
    import { CloseOutline } from "flowbite-svelte-icons";
    import { Block, Button, Icon, Link } from "konsta/svelte";
    import { browser } from '$app/environment';
    import { onMount } from "svelte";

    let showInstall:boolean = false;
    let userClosedIt: boolean = false;
    let deferredPrompt:any = null;
    const onInstall = async () => {
        deferredPrompt.prompt()
        // Wait for the user to respond to the prompt
        const choiceResult = await deferredPrompt.userChoice
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt')
        } else {
            console.log('User dismissed the install prompt')
        }
    };
    const listenBeforeinstallpromptEvent = ()  => {
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('the mini-infobar')
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault()
            // Stash the event so it can be triggered later.
            deferredPrompt = e
            // Update UI notify the user they can install the PWA
            showInstall = true
        })
    };
    const detectPWAWasSuccessfullyInstalled = () => {
        window.addEventListener('appinstalled', (evt) => {
            console.log({ evt })
            // Log install to analytics
            showInstall = false
            console.log('INSTALL: Success')
        })
    };

    const detectHowPWAWasLaunched = () => {
        window.addEventListener('DOMContentLoaded', () => {
            let displayMode = 'browser tab'
            if (navigator.standalone) {
            displayMode = 'standalone-ios'
            }
            if (window.matchMedia('(display-mode: standalone)').matches) {
            displayMode = 'standalone'
            }
            // Log launch display mode to analytics
            console.log('DISPLAY_MODE_LAUNCH:', displayMode)
        })
    };
    const trackDisplayModeChanges = () => {
        window.addEventListener('DOMContentLoaded', () => {
            window.matchMedia('(display-mode: standalone)').addListener((evt) => {
            let displayMode = 'browser tab'
            if (evt.matches) {
                displayMode = 'standalone'
            }
            // Log display mode change to analytics
            console.log('DISPLAY_MODE_CHANGED', displayMode)
            })
        })
    };
    onMount(()  => {
        if(browser){
            detectHowPWAWasLaunched();
            listenBeforeinstallpromptEvent()
            detectPWAWasSuccessfullyInstalled()
        }
    });

</script>
  
  <div>
    {#if showInstall && !userClosedIt}
            <div  class="install__box">
            
            <Link slot="right" iconOnly navbar onClick={() => userClosedIt = true}>
                <Icon badgeColors={{ bg: 'bg-red-500' }}>
                <CloseOutline />
                </Icon>
            </Link>
            <!-- <img src="@/assets/logo_infor_trans.png" class="install__logo" /> -->
            <Block class="install__text-box">
                <div class="install__text-box_title">Vamos a la playa</div>
                <div class="install__text-box_desc">Desea instalar la app aqui?</div>
            </Block>
            <Button onClick={onInstall} class="install__btn" touchRipple>
                Instalar
            </Button>
            </div>
    {/if}
  </div>
  
  <style>
  .install__box {
  box-shadow: 0 5px 5px -5px #777;
  background: white;
  z-index: 1000;
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.install__close-btn {
  margin-right: 5px;
}

.install__close-icon {
  color: #666;
  font-size: 13px;
}

.install__logo {
  width: 50px;
  object-fit: cover;
}

.install__text-box {
  color: #444;
  margin-left: 7px;
}

.install__text-box_title {
  font-weight: 500;
}

.install__text-box_desc {
  font-size: 14px;
  color: #555;
  font-size: 14px;
}

.install__btn {
  all: unset;
  margin-left: 10px;
  padding: 5px 15px;
  color: white;
  -webkit-text-fill-color: white;
  background: orange;
  border-radius: 15px;
  font-size: 15px;
}
  </style>