/**
 * @param {string} path
 * @param {(string)=>void} action
 * @returns {string}
 */
export default function guess_game(path, action) {
    window.api.send("guess_game", [path]);
    window.api.receive("guess_game", (data) => {
        console.log(data);
        action(data);
    });
}