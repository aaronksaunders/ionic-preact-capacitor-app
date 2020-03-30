import { h, Component } from "preact";
import { actionSheetController } from "@ionic/core";

/* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css';

export default class App extends Component {
  state = {
    result: {}
  };

  showController = async () => {
    window.actionSheetController = actionSheetController;
    const actionSheet = await actionSheetController.create({
      header: "Albums",
      buttons: [
        { text: "Delete", role: "destructive" },
        { text: "Share" },
        {
          text: "Play",
          handler: async () => {
            console.log("Play clicked");
            return await actionSheetController.dismiss(
              { myStuff: "teest" },
              "Play"
            );
          }
        },
        { text: "Cancel", role: "cancel" }
      ]
    });
    await actionSheet.present();

    let result = await actionSheet.onDidDismiss();
    this.setState({ result });
  };

  render() {
      return (
        <ion-app >
          <ion-page class="ion-page">
            <ion-header translucent>
              <ion-toolbar>
                <ion-title>Test Preact Application</ion-title>
              </ion-toolbar>
            </ion-header>

            <ion-content class="ion-padding">
              <ion-item>
                <ion-label class="ion-text-wrap">
                  Using the base web components from Ionic Framework to get a
                  simple Preact Application Up and Running
                </ion-label>
              </ion-item>
              <ion-card>
                <ion-card-content>
                  <ion-button onClick={() => this.showController()}>
                    Show Action Sheet
                  </ion-button>
                  <div>
                    <ion-label class="ion-text-wrap">
                      <pre>{JSON.stringify(this.state.result)}</pre>
                    </ion-label>
                  </div>
                </ion-card-content>
              </ion-card>
            </ion-content>
          </ion-page>
        </ion-app>
      );
  }
}
