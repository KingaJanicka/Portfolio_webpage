export function createClientRectTracker() {
    let rect = $state(null);

    const action = node => {
        function update() {
            rect = node.getBoundingClientRect();
        }

        const handle = setInterval(update, 100);
        update();

        return {
            destroy() { clearInterval(handle); },
        };
    };

    Object.defineProperty(action, 'value', {
        get: () => rect,
    });

    return action;
}