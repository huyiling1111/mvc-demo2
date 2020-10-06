import $ from 'jquery'
import './app2.css'
const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
let index1 = parseInt(localStorage.getItem('item')) || 0
console.log(`index2${index1}`)
$tabBar.on('click', 'li', e => {
    const $li = $(e.currentTarget);
    const liIndex = $li.index()
    localStorage.setItem('item', liIndex)
    // console.log(liIndex)
    console.log(`index${index1}`)
    $tabBar.children().eq(index1).addClass('selected').siblings().removeClass('selected')

    $tabContent.children().eq(index1).addClass('active').siblings().removeClass('active')
    // 找到tabContent的儿子们的第index个的css设置为display block 而兄弟们设置display none
})
//事件委托