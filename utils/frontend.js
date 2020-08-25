// export function setVH() {
//   if (process.client) {
//     let vh = window.innerHeight * 0.01
//     document.documentElement.style.setProperty(`--vh`, `${vh}px`)
//   }
// }

// window.addEventListener(`resize`, setVH)
// // Tab With Slick Carousel
export function tabCarousel() {
  const $items = document.querySelectorAll('[data-items="slick"]')
  const $contentItems = document.querySelectorAll('[data-items="tabContent"]')

  $contentItems[0].classList.add('active')

  $items.forEach((el) => {
    el.addEventListener('click', function () {
      const _id = el.dataset.id

      $contentItems.forEach((el) => {
        el.classList.remove('active')
      })

      $contentItems[_id].classList.add('active')
    })
  })
}

// // Set offset
export function setOffset() {
  const $offsetItems = document.querySelectorAll('[data-set="offset"]')
  const $header = document.querySelector('.header').clientHeight
  const $footer = document.querySelector('.currency-wrap').clientHeight
  $offsetItems.forEach((el) => {
    const dataset = el.dataset.offset
    if (dataset === 'top bottom') {
      el.style.marginTop = `${$header}px`
      el.style.marginBottom = `${$footer}px`
    }
    if (dataset === 'top') {
      el.style.paddingTop = `${$header}px`
    }
    if (dataset === 'bottom') {
      el.style.paddingBottom = `${$footer}px`
    }
  })
}

// // Tab Navigation
export function tabNavigation() {
  const $tabItems = document.querySelectorAll('[data-toggle="tab"]')
  const $tabPanels = document.querySelectorAll('[role="tabpanel"]')
  $tabItems.forEach((el, index) => {
    el.addEventListener('click', function () {
      $tabPanels.forEach((el) => {
        el.style.display = 'none'
      })
      $tabItems.forEach((el) => {
        el.classList.remove('active')
      })
      el.classList.add('active')
      $tabPanels[index].style.display = 'block'
    })
  })
}

// // Dropdown
export function dropdown() {
  // let $button = document.querySelectorAll('[data-toggle="dropdown"]')
  // let $dropdown = document.querySelectorAll('[ data-label="content"]')
  // $button.forEach((el) => {
  //   el.addEventListener('click', function () {
  //     let $currentDropdown = el
  //       .closest('.dropdown')
  //       .querySelector('[ data-label="content"]')
  //     $dropdown.forEach((el) => {
  //       el.classList.remove('active')
  //     })
  //     $currentDropdown.classList.toggle('active')
  //   })
  // })
}

// // Accardion
export function accardion(ref) {
  ref.addEventListener('click', change)

  function change(event) {
    var target = event.target.closest('.tab-arrow')

    if (!target) return

    if (target.classList.contains('active')) {
      hideAll()
    } else {
      hideAll()
      target.classList.add('active')
      showText(target.closest('.accordion-header').nextElementSibling)
    }
  }

  function hideAll() {
    let arrow = ref.querySelectorAll('.tab-arrow')
    let content = ref.querySelectorAll('.accordion-content')

    for (let i = 0; i < arrow.length; i++) {
      arrow[i].classList.remove('active')
    }

    for (let i = 0; i < content.length; i++) {
      content[i].style.height = '0'
    }
  }

  function showText(textEl) {
    textEl.style.height = textEl.scrollHeight + 'px'
  }
}

// Header Search
export function search(searchButton, searchContent) {
  const $body = document.querySelector('body')

  searchButton.addEventListener('click', function () {
    $body.classList.toggle('search-enabled')
    searchContent.classList.toggle('active')
  })
}

export function getLeftSideClientRect() {
  const $target = document.querySelector('[data-resize="resize"]')
  const rectLeft = $target.getBoundingClientRect().left
  const $offsetContainer = document.querySelectorAll(
    '[data-offset="setLeftOffset"]'
  )
  $offsetContainer.forEach((el) => {
    el.style.marginLeft = `${rectLeft}px`
  })
}
// document.addEventListener('DOMContentLoaded', function () {
//   getLeftSideClientRect()
// })
// // Event Resize polyfill for IE 9-11
// ;(function () {
//   var throttle = function (type, name, obj) {
//     obj = obj || window
//     var running = false
//     var func = function () {
//       if (running) {
//         return
//       }
//       running = true
//       requestAnimationFrame(function () {
//         obj.dispatchEvent(new CustomEvent(name))
//         running = false
//       })
//     }
//     obj.addEventListener(type, func)
//   }

//   throttle('resize', 'optimizedResize')
// })()

// window.addEventListener('optimizedResize', function () {
//   getLeftSideClientRect()
// })

// // CBPGridGallery https://tympanus.net/codrops/2014/03/21/google-grid-gallery/
// var docElem = window.document.documentElement,
//   transEndEventName = 'transitionend',
//   support = {
//     transitions: true,
//     support3d: true,
//   }

// function setTransform(el, transformStr) {
//   el.style.WebkitTransform = transformStr
//   el.style.msTransform = transformStr
//   el.style.transform = transformStr
// }

// // from http://responsejs.com/labs/dimensions/
// function getViewportW() {
//   var client = docElem['clientWidth'],
//     inner = window['innerWidth']

//   if (client < inner) return inner
//   else return client
// }

// function extend(a, b) {
//   for (var key in b) {
//     if (b[key]) {
//       a[key] = b[key]
//     }
//   }
//   return a
// }

// export function CBPGridGallery(el, options) {
//   this.el = el
//   this.options = extend({}, this.options)
//   extend(this.options, options)
//   this._init()
// }

// CBPGridGallery.prototype.options = {}

// CBPGridGallery.prototype._init = function () {
//   // main grid
//   this.grid = this.el.querySelector('.grid-wrap > ul.grid')
//   // main grid items
//   this.gridItems = [].slice.call(this.grid.querySelectorAll('li'))
//   // items total
//   this.itemsCount = this.gridItems.length
//   // slideshow grid
//   this.slideshow = this.el.querySelector('.slideshow > ul')
//   // slideshow grid items
//   this.slideshowItems = [].slice.call(this.slideshow.children)
//   // index of current slideshow item
//   this.current = -1
//   // slideshow control buttons
//   this.ctrlPrev = this.el.querySelector('.slideshow > nav > span.nav-prev')
//   this.ctrlNext = this.el.querySelector('.slideshow > nav > span.nav-next')
//   this.ctrlClose = this.el.querySelector('.slideshow span.nav-close')
//   this.countStart = this.el.querySelector('.count-start')
//   this.countLength = this.el.querySelector(
//     '.count-length'
//   ).textContent = this.itemsCount
//   this._initEvents()
// }

// CBPGridGallery.prototype._initEvents = function () {
//   var self = this

//   // open the slideshow when clicking on the main grid items
//   this.gridItems.forEach(function (item, idx) {
//     item.addEventListener('click', function () {
//       self._openSlideshow(idx)
//       self.countStart.textContent = idx + 1
//     })
//   })

//   // slideshow controls
//   this.ctrlPrev.addEventListener('click', function () {
//     self._navigate('prev')
//   })
//   this.ctrlNext.addEventListener('click', function () {
//     self._navigate('next')
//   })
//   this.ctrlClose.addEventListener('click', function () {
//     self._closeSlideshow()
//   })

//   // this.slideshow.addEventListener('touchmove', function () {
//   //   console.log('Move')
//   // }, false);

//   // keyboard navigation events
//   document.addEventListener('keydown', function (ev) {
//     if (self.isSlideshowVisible) {
//       var keyCode = ev.keyCode || ev.which

//       switch (keyCode) {
//         case 37:
//           self._navigate('prev')
//           break
//         case 39:
//           self._navigate('next')
//           break
//         case 27:
//           self._closeSlideshow()
//           break
//       }
//     }
//   })
//   window.addEventListener('scroll', function () {
//     if (self.isSlideshowVisible) {
//       window.scrollTo(
//         self.scrollPosition ? self.scrollPosition.x : 0,
//         self.scrollPosition ? self.scrollPosition.y : 0
//       )
//     } else {
//       self.scrollPosition = {
//         x: window.pageXOffset || docElem.scrollLeft,
//         y: window.pageYOffset || docElem.scrollTop,
//       }
//     }
//   })
// }

// CBPGridGallery.prototype._openSlideshow = function (pos) {
//   this.isSlideshowVisible = true
//   this.current = pos
//   this.el.classList.add('slideshow-open')
//   this._setViewportItems()
//   this.currentItem.classList.add('current')
//   this.currentItem.classList.add('show')
//   if (this.prevItem) {
//     this.prevItem.classList.add('show')
//     let translateVal = Number(
//       -1 * (getViewportW() / 2 + this.prevItem.offsetWidth / 2)
//     )
//     setTransform(
//       this.prevItem,
//       support.support3d
//         ? 'translate3d(' + translateVal + 'px, 0, -150px)'
//         : 'translate(' + translateVal + 'px)'
//     )
//   }
//   if (this.nextItem) {
//     this.nextItem.classList.add('show')
//     let translateVal = Number(
//       getViewportW() / 2 + this.nextItem.offsetWidth / 2
//     )
//     setTransform(
//       this.nextItem,
//       support.support3d
//         ? 'translate3d(' + translateVal + 'px, 0, -150px)'
//         : 'translate(' + translateVal + 'px)'
//     )
//   }
// }

// CBPGridGallery.prototype._navigate = function (dir) {
//   if (this.isAnimating) return
//   if (
//     (dir === 'next' && this.current === this.itemsCount - 1) ||
//     (dir === 'prev' && this.current === 0)
//   ) {
//     this._closeSlideshow()
//     return
//   }

//   this.isAnimating = true

//   // reset viewport items
//   this._setViewportItems()

//   var self = this
//   var itemWidth = 660,
//     // positions for the centered/current item, both the side items and the incoming ones
//     transformLeftStr = support.support3d
//       ? 'translate3d(-' +
//         Number(getViewportW() / 2 + itemWidth / 2) +
//         'px, 0, -150px)'
//       : 'translate(-' + Number(getViewportW() / 2 + itemWidth / 2) + 'px)',
//     transformRightStr = support.support3d
//       ? 'translate3d(' +
//         Number(getViewportW() / 2 + itemWidth / 2) +
//         'px, 0, -150px)'
//       : 'translate(' + Number(getViewportW() / 2 + itemWidth / 2) + 'px)',
//     transformCenterStr = '',
//     transformOutStr,
//     transformIncomingStr,
//     // incoming item
//     incomingItem

//   if (dir === 'next') {
//     this.countStart.textContent = +this.countStart.textContent + 1
//     transformOutStr = support.support3d
//       ? 'translate3d( -' +
//         Number((getViewportW() * 2) / 2 + itemWidth / 2) +
//         'px, 0, -150px )'
//       : 'translate(-' + Number((getViewportW() * 2) / 2 + itemWidth / 2) + 'px)'
//     transformIncomingStr = support.support3d
//       ? 'translate3d( ' +
//         Number((getViewportW() * 2) / 2 + itemWidth / 2) +
//         'px, 0, -150px )'
//       : 'translate(' + Number((getViewportW() * 2) / 2 + itemWidth / 2) + 'px)'
//   } else {
//     this.countStart.textContent = +this.countStart.textContent - 1
//     transformOutStr = support.support3d
//       ? 'translate3d( ' +
//         Number((getViewportW() * 2) / 2 + itemWidth / 2) +
//         'px, 0, -150px )'
//       : 'translate(' + Number((getViewportW() * 2) / 2 + itemWidth / 2) + 'px)'
//     transformIncomingStr = support.support3d
//       ? 'translate3d( -' +
//         Number((getViewportW() * 2) / 2 + itemWidth / 2) +
//         'px, 0, -150px )'
//       : 'translate(-' + Number((getViewportW() * 2) / 2 + itemWidth / 2) + 'px)'
//   }

//   // remove class animatable from the slideshow grid (if it has already)
//   self.slideshow.classList.remove('animatable')

//   if (
//     (dir === 'next' && this.current < this.itemsCount - 2) ||
//     (dir === 'prev' && this.current > 1)
//   ) {
//     // we have an incoming item!
//     incomingItem = this.slideshowItems[
//       dir === 'next' ? this.current + 2 : this.current - 2
//     ]
//     setTransform(incomingItem, transformIncomingStr)
//     incomingItem.classList.add('show')
//   }

//   var slide = function () {
//     // add class animatable to the slideshow grid
//     self.slideshow.classList.add('animatable')

//     // overlays:
//     self.currentItem.classList.remove('current')
//     var nextCurrent = dir === 'next' ? self.nextItem : self.prevItem
//     nextCurrent.classList.add('current')

//     setTransform(
//       self.currentItem,
//       dir === 'next' ? transformLeftStr : transformRightStr
//     )

//     if (self.nextItem) {
//       setTransform(
//         self.nextItem,
//         dir === 'next' ? transformCenterStr : transformOutStr
//       )
//     }

//     if (self.prevItem) {
//       setTransform(
//         self.prevItem,
//         dir === 'next' ? transformOutStr : transformCenterStr
//       )
//     }

//     if (incomingItem) {
//       setTransform(
//         incomingItem,
//         dir === 'next' ? transformRightStr : transformLeftStr
//       )
//     }

//     var onEndTransitionFn = function (ev) {
//       if (support.transitions) {
//         if (ev.propertyName.indexOf('transform') === -1) return false
//         this.removeEventListener(transEndEventName, onEndTransitionFn)
//       }

//       if (self.prevItem && dir === 'next') {
//         self.prevItem.classList.remove('show')
//       } else if (self.nextItem && dir === 'prev') {
//         self.nextItem.classList.remove('show')
//       }

//       if (dir === 'next') {
//         self.prevItem = self.currentItem
//         self.currentItem = self.nextItem
//         if (incomingItem) {
//           self.nextItem = incomingItem
//         }
//       } else {
//         self.nextItem = self.currentItem
//         self.currentItem = self.prevItem
//         if (incomingItem) {
//           self.prevItem = incomingItem
//         }
//       }

//       self.current = dir === 'next' ? self.current + 1 : self.current - 1
//       self.isAnimating = false
//     }

//     if (support.transitions) {
//       self.currentItem.addEventListener(transEndEventName, onEndTransitionFn)
//     } else {
//       onEndTransitionFn()
//     }
//   }

//   setTimeout(slide, 25)
// }

// CBPGridGallery.prototype._closeSlideshow = function (/*pos*/) {
//   // remove class slideshow-open from the grid gallery elem
//   this.el.classList.remove('slideshow-open')
//   // remove class animatable from the slideshow grid
//   this.slideshow.classList.remove('animatable')

//   var self = this,
//     onEndTransitionFn = function (ev) {
//       if (support.transitions) {
//         if (ev.target.tagName.toLowerCase() !== 'ul') return
//         this.removeEventListener(transEndEventName, onEndTransitionFn)
//       }
//       // remove classes show and current from the slideshow items
//       self.currentItem.classList.remove('current')
//       self.currentItem.classList.remove('show')

//       if (self.prevItem) {
//         self.prevItem.classList.remove('show')
//       }
//       if (self.nextItem) {
//         self.nextItem.classList.remove('show')
//       }

//       // also reset any transforms for all the items
//       self.slideshowItems.forEach(function (item) {
//         setTransform(item, '')
//       })

//       self.isSlideshowVisible = false
//     }

//   if (support.transitions) {
//     this.el.addEventListener(transEndEventName, onEndTransitionFn)
//   } else {
//     onEndTransitionFn()
//   }
// }

// CBPGridGallery.prototype._setViewportItems = function () {
//   this.currentItem = null
//   this.prevItem = null
//   this.nextItem = null

//   if (this.current > 0) {
//     this.prevItem = this.slideshowItems[this.current - 1]
//   }
//   if (this.current < this.itemsCount - 1) {
//     this.nextItem = this.slideshowItems[this.current + 1]
//   }
//   this.currentItem = this.slideshowItems[this.current]
// }
