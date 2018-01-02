export function LOADING(action, options = { delay: 500, text: '' }) {
    if (action === 'hide') {
        console.log('loading-hide')
    } else if (action === 'show') {
        console.log('loading-show')
    }
}

export function TOAST(text = '', duration = 1500) {

}

export default {
    LOADING,
    TOAST
}