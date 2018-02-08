// NOTE: this may not work with server rendering
// see this discussion https://github.com/facebook/react/issues/5867
let idCounter = 0;

export default function generateUID(inst) {
    return btoa(inst.constructor.name) + idCounter++;
}
