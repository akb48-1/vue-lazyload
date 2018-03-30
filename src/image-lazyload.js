    /**
     * vue 图片懒加载 for vue2    --akb48-1
     * 
     * import Lazyload from './image-lazyload';
     * Vue.use(Lazyload, {
     *     defaultUrl : '/static/loading.gif'
     * });
     */
import 'intersection-observer';

function push(el, binding) {
    el.placeholder = binding.value;
    io.observe(el);
}
function inserted(el, binding) {
    el.src = params.defaultUrl;
}
function update(el, binding) {
    console.log(el, binding)
}
function remove(el) {
    console.log(el, binding)
}

const  hookFn = {
    bind: (el, binding) => push(el, binding),
    inserted: (el, binding) => inserted(el, binding),
    update: (el, binding) => update(el, binding),
    unbind: (el, binding) => remove(el, binding),
}

var params = {};
export default {
    install(Vue, options = {}) {
        if(!options.defaultUrl) return console.error('defaultUrl is undefined');
        params = options;
        Vue.directive('lazy', hookFn);
    }
}

const io = new IntersectionObserver((entries) => {
        entries.forEach(entrie => {
            fadeOut(entrie.target);
            if (entrie.intersectionRatio <= 0.3) return;
                loadEvent(entrie, entrie.target.placeholder);
        });
},{
    threshold: [.3]
});

const loadEvent = function(entrie, placeholder) {

    // 开始更新图片
    uploadImg(entrie, placeholder);

    function uploadImg (entrie, placeholder) {
        var state = entrie.target.getAttribute('lazy') ? entrie.target.getAttribute('lazy') : 'pendding';
        var img = new Image();
            switch(state)
            {
                case 'pendding':
                    entrie.target.src = img.src = placeholder;
                    img.onload = function() {
                        entrie.target.setAttribute('lazy', 'success');
                        fadeIn(entrie.target);
                        io.unobserve(entrie.target);
                    };
                    img.onerror = function() {
                        entrie.target.setAttribute('lazy', 'error');
                        entrie.target.src = img.src = params.defaultUrl;
                        fadeIn(entrie.target);
                    };
                    break;
                default:
                    break;
            };
    }
}

var transitionend = 'transition' in window.document.body.style? 'transitionend' : 'webkitTransitionend';
var transition = 'transition' in window.document.body.style? 'transition' : 'webkitTransition';

// 初始化图片透明
var fadeOut = (el) => {
    el.style.opacity = 0;
    el.style.transition = 'opacity .3s';
    el.style.webkitTransition = 'opacity .3s';
}
// 图片显示
var fadeIn = (el) => {
    el.style.opacity = 1;
    
    el.addEventListener(transitionend, callback(el), false);
    el.removeEventListener(transitionend, callback);

    function callback(el) {
        el.style.cssText = '';
    }
}
