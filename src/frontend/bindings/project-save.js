export default function project_save() {
    window.api.send("project_save", "some data");
    window.api.receive("fromMain", (data) => {
        console.log(`Received ${data} from main process`);
    });
}