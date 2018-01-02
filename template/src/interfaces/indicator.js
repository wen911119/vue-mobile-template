export function LOADING(options = { delay: 500, text: '' }) {
    return {
        start: () => {

        },
        end: () => {

        }
    }
}

export function TOAST(text = '', duration = 1500) {

}

export default {
    LOADING,
    TOAST
}