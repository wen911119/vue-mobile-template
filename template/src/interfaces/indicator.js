let queue = []
export function LOADING(action, options = { delay: 500, text: '' }) {
    if (action === 'hide') {
        const lid = queue.pop()
        typeof (lid) === 'number' && clearTimeout(lid)
        queue.length === 0 && _hideLoading()
    } else if (action === 'show') {
        if (queue.length === 0) {
            queue.push(setTimeout(() => _showLoading(options.text), options.delay))
        } else {
            queue.push(options)
        }
    }
}

export function TOAST(text = '', duration = 1500) {

}

function _showLoading(text) {
    console.log('loading-show', text)
}

function _hideLoading() {
    console.log('loading-hide')
}

export default {
    LOADING,
    TOAST
}