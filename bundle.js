!(function(t) {
  function e(e) {
    for (var i, s, r = e[0], o = e[1], a = 0, u = []; a < r.length; a++)
      (s = r[a]),
        Object.prototype.hasOwnProperty.call(n, s) && n[s] && u.push(n[s][0]),
        (n[s] = 0)
    for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i])
    for (h && h(e); u.length; ) u.shift()()
  }
  var i = {},
    n = {1: 0}
  function s(e) {
    if (i[e]) return i[e].exports
    var n = (i[e] = {i: e, l: !1, exports: {}})
    return t[e].call(n.exports, n, n.exports, s), (n.l = !0), n.exports
  }
  ;(s.e = function(t) {
    var e = [],
      i = n[t]
    if (0 !== i)
      if (i) e.push(i[2])
      else {
        var r = new Promise(function(e, s) {
          i = n[t] = [e, s]
        })
        e.push((i[2] = r))
        var o,
          a = document.createElement('script')
        ;(a.charset = 'utf-8'),
          (a.timeout = 120),
          s.nc && a.setAttribute('nonce', s.nc),
          (a.src = (function(t) {
            return s.p + './chunks/chunks' + t + '.js'
          })(t))
        var h = new Error()
        o = function(e) {
          ;(a.onerror = a.onload = null), clearTimeout(u)
          var i = n[t]
          if (0 !== i) {
            if (i) {
              var s = e && ('load' === e.type ? 'missing' : e.type),
                r = e && e.target && e.target.src
              ;(h.message =
                'Loading chunk ' + t + ' failed.\n(' + s + ': ' + r + ')'),
                (h.name = 'ChunkLoadError'),
                (h.type = s),
                (h.request = r),
                i[1](h)
            }
            n[t] = void 0
          }
        }
        var u = setTimeout(function() {
          o({type: 'timeout', target: a})
        }, 12e4)
        ;(a.onerror = a.onload = o), document.head.appendChild(a)
      }
    return Promise.all(e)
  }),
    (s.m = t),
    (s.c = i),
    (s.d = function(t, e, i) {
      s.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
    }),
    (s.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
        Object.defineProperty(t, '__esModule', {value: !0})
    }),
    (s.t = function(t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var i = Object.create(null)
      if (
        (s.r(i),
        Object.defineProperty(i, 'default', {enumerable: !0, value: t}),
        2 & e && 'string' != typeof t)
      )
        for (var n in t)
          s.d(
            i,
            n,
            function(e) {
              return t[e]
            }.bind(null, n)
          )
      return i
    }),
    (s.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return s.d(e, 'a', e), e
    }),
    (s.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (s.p = ''),
    (s.oe = function(t) {
      throw (console.error(t), t)
    })
  var r = (window.webpackJsonp = window.webpackJsonp || []),
    o = r.push.bind(r)
  ;(r.push = e), (r = r.slice())
  for (var a = 0; a < r.length; a++) e(r[a])
  var h = o
  s((s.s = 4))
})([
  ,
  function(t, e, i) {
    'use strict'
    ;(function(e) {
      var i, n
      Object.defineProperty(Object.prototype, '$method', {
        value: function(t, e) {
          Object.defineProperty(this, t, {
            value: e,
            enumerable: !1,
            writable: !0
          })
        }
      }),
        Object.prototype.$method('setter', function(t, e) {
          Object.defineProperty(this, t, {
            set: e,
            enumerable: !1,
            configurable: !0
          })
        }),
        Object.prototype.$method('getter', function(t, e) {
          Object.defineProperty(this, t, {
            get: e,
            enumerable: !1,
            configurable: !0
          })
        }),
        Object.prototype.$method('accessor', function(t, e) {
          Object.defineProperty(this, t, {
            set: e.set,
            get: e.get,
            enumerable: !1,
            configurable: !0
          })
        }),
        Object.prototype.$method('forIn', function(t, e) {
          return (
            (e = e || this),
            Object.keys(this).forEach(function(i, n) {
              var s = this[i]
              t.call(e, i, s, n)
            }, this),
            this
          )
        }),
        Object.prototype.$method('$get', function(t) {
          return t.split('.').reduce(function(t, e) {
            return t && t[e]
          }, this)
        }),
        Object.prototype.$method('$set', function(t, e) {
          t.split('.').reduce(function(t, i, n, s) {
            if (n !== s.length - 1) return t[i] || (t[i] = {}), t[i]
            t[i] = e
          }, this)
        }),
        Object.prototype.$method('$has', function(t) {
          return this.hasOwnProperty(t)
        }),
        Object.prototype.$method('$extend', function() {
          return (
            Array.prototype.forEach.call(
              arguments,
              function(t) {
                for (var e in t) this[e] = t[e]
              },
              this
            ),
            this
          )
        }),
        Object.prototype.$method('$safe', function(t) {
          return (
            Array.prototype.forEach.call(
              arguments,
              function(t) {
                for (var e in t) void 0 === this[e] && (this[e] = t[e])
              },
              this
            ),
            this
          )
        }),
        Object.prototype.$method('$strict', function(t) {
          return (
            Array.prototype.forEach.call(
              arguments,
              function(t) {
                for (var e in t)
                  console.assert(
                    !this[e],
                    'tm error: {0} is Already'.format(e)
                  ),
                    (this[e] = t[e])
              },
              this
            ),
            this
          )
        }),
        Object.prototype.$method('$pick', function() {
          var t = {}
          return (
            Array.prototype.forEach.call(
              arguments,
              function(e) {
                e in this && (t[e] = this[e])
              },
              this
            ),
            t
          )
        }),
        Object.prototype.$method('$omit', function() {
          var t = {}
          for (var e in this)
            -1 == Array.prototype.indexOf.call(arguments, e) && (t[e] = this[e])
          return t
        }),
        Object.prototype.$method('$toArray', function() {
          return Array.prototype.slice.call(this)
        }),
        Object.prototype.$method('$watch', function(t, e) {
          for (
            var i = this, n = null;
            i && !(n = Object.getOwnPropertyDescriptor(i, t));

          )
            i = Object.getPrototypeOf(i)
          if (n)
            if (void 0 !== n.value) {
              var s = '__' + t,
                r = this[t]
              ;(this[s] = r),
                this.accessor(t, {
                  get: function() {
                    return this[s]
                  },
                  set: function(t) {
                    var i = this[s]
                    ;(this[s] = t), e.call(this, t, i)
                  }
                })
            } else
              this.accessor(t, {
                get: function() {
                  return n.get.call(this)
                },
                set: function(t) {
                  var i = n.get.call(this)
                  n.set.call(this, t), e.call(this, t, i)
                }
              })
          else {
            var o = '__' + t
            this.accessor(t, {
              get: function() {
                return this[o]
              },
              set: function(t) {
                var i = this[o]
                ;(this[o] = t), e.call(this, t, i)
              }
            })
          }
        }),
        Object.observe ||
          Object.$method('observe', function(t, e) {
            Object.keys(t).forEach(function(i) {
              var n = '__' + i,
                s = t[i]
              ;(t[n] = s),
                t.accessor(i, {
                  get: function() {
                    return this[n]
                  },
                  set: function(t) {
                    ;(this[n] = t), e()
                  }
                })
            })
          }),
        Object.unobserve ||
          Object.$method('unobserve', function(t, e) {
            console.assert(!1)
          }),
        Number.prototype.$method('round', function(t) {
          t = t || 0
          var e = Math.pow(10, t),
            i = this * e
          return (i = Math.round(i)) / e
        }),
        Number.prototype.$method('ceil', function(t) {
          t = t || 0
          var e = Math.pow(10, t),
            i = this * e
          return (i = Math.ceil(i)) / e
        }),
        Number.prototype.$method('floor', function(t) {
          t = t || 0
          var e = Math.pow(10, t),
            i = this * e
          return (i = Math.floor(i)) / e
        }),
        Number.prototype.$method('toInt', function() {
          return 0 | this
        }),
        Number.prototype.$method('toHex', function() {
          return this.toString(16)
        }),
        Number.prototype.$method('toBin', function() {
          return this.toString(2)
        }),
        Number.prototype.$method('toUnsigned', function() {
          return this >>> 0
        }),
        Number.prototype.$method('padding', function(t, e) {
          var i = this + ''
          for (t -= i.length, e = (e || '0')[0]; t-- > 0; ) i = e + i
          return i.indexOf('-') >= 0 && (i = '-' + i.replace('-', '')), i
        }),
        Number.prototype.$method('times', function(t, e) {
          e = e || this
          for (var i = 0; i < this; ++i) t.call(e, i, this)
          return this
        }),
        Number.prototype.$method('upto', function(t, e, i) {
          i = i || this
          for (var n = +this; n <= t; ++n) e.call(i, n, this)
          return this
        }),
        Number.prototype.$method('downto', function(t, e, i) {
          i = i || this
          for (var n = +this; n >= t; --n) e.call(i, n, this)
          return this
        }),
        Number.prototype.$method('step', function(t, e, i, n) {
          n = n || this
          for (var s = +this; s <= t; s += e) i.call(n, s, this)
          return this
        }),
        Number.prototype.$method('map', function(t, e) {
          e = e || this
          for (var i = [], n = 0; n < this; ++n) {
            var s = t.call(e, n)
            i.push(s)
          }
          return i
        }),
        Number.prototype.$method('abs', function() {
          return Math.abs(this)
        }),
        Number.prototype.$method('acos', function() {
          return Math.acos(this)
        }),
        Number.prototype.$method('asin', function() {
          return Math.asin(this)
        }),
        Number.prototype.$method('atan', function() {
          return Math.atan(this)
        }),
        Number.prototype.$method('cos', function() {
          return Math.cos(this)
        }),
        Number.prototype.$method('exp', function() {
          return Math.exp(this)
        }),
        Number.prototype.$method('log', function() {
          return Math.log(this)
        }),
        Number.prototype.$method('max', function(t) {
          return Math.max(this, t)
        }),
        Number.prototype.$method('min', function(t) {
          return Math.min(this, t)
        }),
        Number.prototype.$method('clamp', function(t, e) {
          return Math.clamp(this, t, e)
        }),
        Number.prototype.$method('pow', function(t) {
          return Math.pow(this, t)
        }),
        Number.prototype.$method('sin', function() {
          return Math.sin(this)
        }),
        Number.prototype.$method('sqrt', function() {
          return Math.sqrt(this)
        }),
        Number.prototype.$method('tan', function() {
          return Math.tan(this)
        }),
        Number.prototype.$method('toDegree', function() {
          return this * Math.RAD_TO_DEG
        }),
        Number.prototype.$method('toRadian', function() {
          return this * Math.DEG_TO_RAD
        }),
        (function() {
          String.prototype.$method('format', function(t) {
            var e = void 0
            if ('object' == typeof t)
              e = function(e, i) {
                return void 0 === t[i] ? '' : t[i]
              }
            else {
              var i = arguments
              e = function(t, e) {
                var n = i[parseInt(e)]
                return null != n ? n : ''
              }
            }
            return this.replace(/\{(\w+)\}/g, e)
          }),
            String.prototype.$method('trim', function() {
              return this.replace(/^\s+|\s+$/g, '')
            }),
            String.prototype.$method('capitalize', function() {
              return this.replace(/\w+/g, function(t) {
                return t.capitalizeFirstLetter()
              })
            }),
            String.prototype.$method('capitalizeFirstLetter', function() {
              return this.charAt(0).toUpperCase() + this.substr(1).toLowerCase()
            }),
            String.prototype.$method('toDash', function() {
              return this.replace(/([A-Z])/g, function(t) {
                return '-' + t.toLowerCase()
              })
            }),
            String.prototype.$method('toHash', function() {
              return this.toCRC32()
            }),
            String.prototype.$method('padding', function(t, e) {
              var i = this.toString()
              for (t -= i.length, e = (e || ' ')[0]; t-- > 0; ) i = e + i
              return i
            }),
            String.prototype.$method('paddingLeft', function(t, e) {
              var i = this.toString()
              for (t -= i.length, e = (e || ' ')[0]; t-- > 0; ) i = e + i
              return i
            }),
            String.prototype.$method('paddingRight', function(t, e) {
              var i = this.toString()
              for (t -= i.length, e = (e || ' ')[0]; t-- > 0; ) i += e
              return i
            }),
            String.prototype.$method('quotemeta', function(t) {
              return this.replace(/([^0-9A-Za-z_])/g, '\\$1')
            }),
            String.prototype.$method('repeat', function(t) {
              for (var e = Array(t), i = 0; i < t; ++i) e[i] = this
              return e.join('')
            }),
            String.prototype.$method('count', function(t) {
              var e = new RegExp(t, 'gm')
              return this.match(e).length
            }),
            String.prototype.$method('include', function(t) {
              return -1 != this.indexOf(t)
            }),
            String.prototype.$method('each', function() {
              return Array.prototype.forEach.apply(this, arguments), this
            }),
            String.prototype.$method('toArray', function() {
              for (var t = [], e = 0, i = this.length; e < i; ++e)
                t.push(this[e])
              return t
            }),
            String.prototype.$method('toObject', function(t, e) {
              ;(t = t || '&'), (e = e || '=')
              var i = {}
              return (
                this.split(t).each(function(t, n) {
                  var s = t.indexOf(e)
                  if (s > 0) {
                    var r = t.substring(0, s),
                      o = t.substring(s + 1),
                      a = Number(o)
                    isNaN(a)
                      ? 'true' === o
                        ? (o = !0)
                        : 'false' === o && (o = !1)
                      : (o = a),
                      (i[r] = o)
                  }
                }),
                i
              )
            })
          var t = '00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D'.split(
            ' '
          )
          String.prototype.$method('toCRC32', function() {
            var e = 0,
              i = 0
            e ^= -1
            for (var n = 0, s = this.length; n < s; ++n)
              (i = 255 & (e ^ this.charCodeAt(n))),
                (e = (e >>> 8) ^ ('0x' + t[i]))
            return (-1 ^ e) >>> 0
          })
        })(),
        Array.prototype.accessor('first', {
          get: function() {
            return this[0]
          },
          set: function(t) {
            this[0] = t
          }
        }),
        Array.prototype.accessor('last', {
          get: function() {
            return this[this.length - 1]
          },
          set: function(t) {
            this[this.length - 1] = t
          }
        }),
        Array.prototype.$method('equals', function(t) {
          if (this.length !== t.length) return !1
          for (var e = 0, i = this.length; e < i; ++e)
            if (this[e] !== t[e]) return !1
          return !0
        }),
        Array.prototype.$method('deepEquals', function(t) {
          if (this.length !== t.length) return !1
          for (var e = 0, i = this.length; e < i; ++e)
            if (
              !1 ===
              (this[e].deepEquals ? this[e].deepEquals(t[e]) : this[e] === t[e])
            )
              return !1
          return !0
        }),
        Array.prototype.$method('contains', function(t, e) {
          return -1 != this.indexOf(t, e)
        }),
        Array.prototype.$method('at', function(t) {
          return (
            (t %= this.length), (t += this.length), this[(t %= this.length)]
          )
        }),
        Array.prototype.$method('find', function(t, e) {
          var i = null
          return (
            this.some(function(n, s) {
              if (t.call(e, n, s, this)) return (i = n), !0
            }),
            i
          )
        }),
        Array.prototype.$method('findIndex', function(t, e) {
          var i = -1
          return (
            this.some(function(n, s) {
              if (t.call(e, n, s, this)) return (i = s), !0
            }),
            i
          )
        }),
        Array.prototype.$method('swap', function(t, e) {
          var i = this[t]
          return (this[t] = this[e]), (this[e] = i), this
        }),
        Array.prototype.$method('erase', function(t) {
          var e = this.indexOf(t)
          return e >= 0 && this.splice(e, 1), this
        }),
        Array.prototype.$method('eraseAll', function(t) {
          for (var e = 0, i = this.length; e < i; ++e)
            this[e] == t && this.splice(e--, 1)
          return this
        }),
        Array.prototype.$method('eraseIf', function(t) {
          for (var e = 0, i = this.length; e < i; ++e)
            if (t(this[e], e, this)) {
              this.splice(e, 1)
              break
            }
          return this
        }),
        Array.prototype.$method('eraseIfAll', function(t) {
          for (var e = 0, i = this.length; e < i; ++e)
            t(this[e], e, this) && (this.splice(e--, 1), i--)
          return this
        }),
        Array.prototype.$method('random', function(t, e) {
          return (
            (t = t || 0), (e = e || this.length - 1), this[Math.randint(t, e)]
          )
        }),
        Array.prototype.$method('pickup', function(t, e) {
          return (
            (t = t || 0), (e = e || this.length - 1), this[Math.randint(t, e)]
          )
        }),
        Array.prototype.$method('lot', function(t, e) {
          return (
            (t = t || 0), (e = e || this.length - 1), this[Math.randint(t, e)]
          )
        }),
        Array.prototype.$method('uniq', function(t) {
          return this.filter(function(t, e, i) {
            return i.indexOf(t) === e
          })
        }),
        Array.prototype.$method('flatten', function(t) {
          var e = null
          if (t) {
            e = this
            for (var i = 0; i < t; ++i) e = Array.prototype.concat.apply([], e)
          } else
            e = this.reduce(function(t, e) {
              return Array.isArray(e) ? t.concat(e.flatten()) : t.concat(e)
            }, [])
          return e
        }),
        Array.prototype.$method('clone', function(t) {
          if (!0 === t) {
            for (var e = Array(this.length), i = 0, n = this.length; i < n; ++i)
              e[i] = this[i].clone ? this[i].clone(t) : this[i]
            return e
          }
          return Array.prototype.slice.apply(this)
        }),
        Array.prototype.$method('clear', function() {
          return (this.length = 0), this
        }),
        Array.prototype.$method('fill', function(t, e, i) {
          ;(e = e || 0), (i = i || this.length)
          for (var n = e; n < i; ++n) this[n] = t
          return this
        }),
        Array.prototype.$method('range', function(t, e, i) {
          if ((this.clear(), 1 == arguments.length))
            for (var n = 0; n < t; ++n) this[n] = n
          else if (t < e) {
            if ((i = i || 1) > 0) {
              n = t
              for (var s = 0; n < e; n += i, ++s) this[s] = n
            }
          } else if ((i = i || -1) < 0)
            for (n = t, s = 0; n > e; n += i, ++s) this[s] = n
          return this
        }),
        Array.prototype.$method('shuffle', function() {
          for (var t = 0, e = this.length; t < e; ++t) {
            var i = Math.randint(0, e - 1)
            t != i && this.swap(t, i)
          }
          return this
        }),
        Array.prototype.$method('sum', function() {
          for (var t = 0, e = 0, i = this.length; e < i; ++e) t += this[e]
          return t
        }),
        Array.prototype.$method('average', function() {
          for (var t = 0, e = this.length, i = 0; i < e; ++i) t += this[i]
          return t / e
        }),
        Array.prototype.$method('each', function() {
          return this.forEach.apply(this, arguments), this
        }),
        Array.prototype.$method('toULElement', function() {}),
        Array.prototype.$method('toOLElement', function() {}),
        Array.$method('range', function(t, e, i) {
          return Array.prototype.range.apply([], arguments)
        }),
        Array.$method('of', function() {
          return Array.prototype.slice.call(arguments)
        }),
        Array.$method('from', function(t, e, i) {
          if (!Object(t).length) return []
          var n = []
          if (Symbol && Symbol.iterator && t[Symbol.iterator]) {
            for (var s = t[Symbol.iterator](); ; ) {
              var r = s.next()
              if (r.done) break
              var o =
                'function' == typeof e ? e.bind(i || this)(r.value) : r.value
              n.push(o)
            }
            return n
          }
          for (var a = 0, h = t.length; a < h; a++) n.push(t[a])
          return n.map(
            'function' == typeof e
              ? e
              : function(t) {
                  return t
                },
            i
          )
        }),
        Array.prototype.$method('most', function(t, e) {
          if (this.length < 1) return {max: -1 / 0, min: 1 / 0}
          if (t) {
            var i = -1 / 0,
              n = 1 / 0,
              s = 0,
              r = 0
            void 0 === e && (e = this)
            for (var o = 0, a = this.length; o < a; ++o) {
              var h = t.call(e, this[o], o, this)
              i < h && ((i = h), (s = o)), n > h && ((n = h), (r = o))
            }
            return {max: this[s], min: this[r]}
          }
          var u = -1 / 0,
            c = 1 / 0
          for (o = 0, a = this.length; o < a; ++o)
            u < this[o] && (u = this[o]), c > this[o] && (c = this[o])
          return {max: u, min: c}
        }),
        (i = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ]),
        (n = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ]),
        Date.prototype.$method('format', function(t) {
          var e = this.getFullYear(),
            s = this.getMonth(),
            r = this.getDate(),
            o = this.getDay(),
            a = this.getHours(),
            h = this.getMinutes(),
            u = this.getSeconds(),
            c =
              (this.getMilliseconds(),
              {
                yyyy: String(e).padding(4, '0'),
                yy: e.toString().substr(2, 2),
                y: e,
                MMMM: i[s],
                MMM: i[s].substr(0, 3),
                MM: String(s + 1).padding(2, '0'),
                M: s + 1,
                dd: String(r).padding(2, '0'),
                d: r,
                EEEE: n[o],
                EEE: n[o].substr(0, 3),
                HH: String(a).padding(2, '0'),
                H: a,
                mm: String(h).padding(2, '0'),
                m: h,
                ss: String(u).padding(2, '0'),
                s: u
              }),
            l = '(' + Object.keys(c).join('|') + ')',
            f = new RegExp(l, 'g')
          return t.replace(f, function(t) {
            return c[t]
          })
        }),
        Date.$method('calculateAge', function(t, e) {
          'string' == typeof t && (t = new Date(t)),
            e ? 'string' == typeof e && (e = new Date(e)) : (e = new Date())
          var i = new Date(t.getTime()).setFullYear(256),
            n = new Date(e.getTime()).setFullYear(256) < i ? 1 : 0
          return e.getFullYear() - t.getFullYear() - n
        }),
        (Math.DEG_TO_RAD = Math.PI / 180),
        (Math.RAD_TO_DEG = 180 / Math.PI),
        (Math.PHI = (1 + Math.sqrt(5)) / 2),
        (Math.degToRad = function(t) {
          return t * Math.DEG_TO_RAD
        }),
        (Math.radToDeg = function(t) {
          return t * Math.RAD_TO_DEG
        }),
        Math.$method('clamp', function(t, e, i) {
          return t < e ? e : t > i ? i : t
        }),
        Math.$method('inside', function(t, e, i) {
          return t >= e && t <= i
        }),
        Math.$method('randint', function(t, e) {
          return Math.floor(Math.random() * (e - t + 1)) + t
        }),
        Math.$method('randfloat', function(t, e) {
          return Math.random() * (e - t) + t
        }),
        Math.$method('randbool', function(t) {
          return Math.randint(0, 100) < (t || 50)
        })
      var s = s || {}
      !(function() {
        ;(s.VERSION = '0.2.3'),
          s.$method('isNode', function() {
            return void 0 !== t
          }),
          s.$method('namespace', function(t) {
            t.call(this)
          })
        var i = s.isNode() ? e : window
        s.accessor('global', {
          get: function() {
            return i
          }
        }),
          s.$method('testUA', function(t) {
            if (!s.global.navigator) return !1
            var e = s.global.navigator.userAgent
            return t.test(e)
          }),
          s.$method('isAndroid', function() {
            return s.testUA(/Android/)
          }),
          s.$method('isIPhone', function() {
            return s.testUA(/iPhone/)
          }),
          s.$method('isIPad', function() {
            return s.testUA(/iPad/)
          }),
          s.$method('isIOS', function() {
            return s.testUA(/iPhone|iPad/)
          }),
          s.$method('isMobile', function() {
            return s.testUA(/iPhone|iPad|Android/)
          }),
          s.isNode() && (t.exports = s),
          (i.phina = s)
      })(),
        s.namespace(function() {
          s.$method('createClass', function(t) {
            var e = function() {
              var t = new e.prototype._creator()
              return e.prototype.init.apply(t, arguments), t
            }
            t.superClass &&
              ((e.prototype = Object.create(t.superClass.prototype)),
              (t.init.owner = e),
              (e.prototype.superInit = function() {
                this.__counter = this.__counter || 0
                var t = this._hierarchies[this.__counter++],
                  e = t.prototype.init
                e.apply(this, arguments), (this.__counter = 0)
              }),
              (e.prototype.superMethod = function() {
                var t = Array.prototype.slice.call(arguments, 0),
                  e = t.shift()
                ;(this.__counters = this.__counters || {}),
                  (this.__counters[e] = this.__counters[e] || 0)
                var i = this._hierarchies[this.__counters[e]++],
                  n = i.prototype[e],
                  s = n.apply(this, t)
                return (this.__counters[e] = 0), s
              }),
              (e.prototype.constructor = e)),
              e.prototype.$extend(t),
              (e.prototype._hierarchies = [])
            for (var i = e.prototype.superClass; i; )
              e.prototype._hierarchies.push(i), (i = i.prototype.superClass)
            return (
              t._accessor &&
                t._accessor.forIn(function(t, i) {
                  e.prototype.accessor(t, i)
                }),
              (e.prototype._creator = function() {
                return this
              }),
              (e.prototype._creator.prototype = e.prototype),
              t._static && e.$extend(t._static),
              t._defined && t._defined.call(e, e),
              e
            )
          }),
            s.$method('using', function(t) {
              if (!t) return s.global
              var e = t.split(/[,.\/ ]|::/),
                i = s.global
              return (
                e.forEach(function(t) {
                  i = i[t] || (i[t] = {})
                }),
                i
              )
            }),
            s.$method('register', function(t, e) {
              var i = t.split(/[,.\/ ]|::/).last,
                n = t.substring(0, t.lastIndexOf('.'))
              return (s.using(n)[i] = e), e
            })
          var t = {}
          s.$method('define', function(e, i) {
            if (i.superClass)
              if ('string' == typeof i.superClass) {
                var n = s.using(i.superClass)
                if ('function' != typeof n)
                  return (
                    t[i.superClass] || (t[i.superClass] = []),
                    void t[i.superClass].push(function() {
                      s.define(e, i)
                    })
                  )
                i.superClass = n
              } else i.superClass = i.superClass
            var r = s.createClass(i)
            return (
              r.prototype.accessor('className', {
                get: function() {
                  return e
                }
              }),
              s.register(e, r),
              t[e] &&
                (t[e].forEach(function(t) {
                  t()
                }),
                (t[e] = null)),
              r
            )
          }),
            s.$method('globalize', function() {
              s.forIn(function(t, e) {
                'object' == typeof e &&
                  e.forIn(function(t, e) {
                    s.global[t] = e
                  })
              })
            }),
            (s._mainListeners = []),
            (s._mainLoaded = !1),
            s.$method('main', function(t) {
              s._mainLoaded ? t() : s._mainListeners.push(t)
            })
          var e = s.global.document
          s.global.addEventListener && e && 'complete' !== e.readyState
            ? s.global.addEventListener('load', function() {
                var t = function() {
                  var e = s._mainListeners.clone()
                  s._mainListeners.clear(),
                    e.each(function(t) {
                      t()
                    }),
                    s._mainListeners.length > 0 ? t(0) : (s._mainLoaded = !0)
                }
                setTimeout(t)
              })
            : (s._mainLoaded = !0)
        }),
        s.namespace(function() {
          s.define('phina.geom.Vector2', {
            x: 0,
            y: 0,
            init: function(t, e) {
              ;(this.x = t), (this.y = e)
            },
            clone: function() {
              return s.geom.Vector2(this.x, this.y)
            },
            equals: function(t) {
              return this.x === t.x && this.y === t.y
            },
            set: function(t, e) {
              return (this.x = t), (this.y = e), this
            },
            add: function(t) {
              return (this.x += t.x), (this.y += t.y), this
            },
            sub: function(t) {
              return (this.x -= t.x), (this.y -= t.y), this
            },
            mul: function(t) {
              return (this.x *= t), (this.y *= t), this
            },
            div: function(t) {
              return (t = t || 0.01), (this.x /= t), (this.y /= t), this
            },
            negate: function() {
              return (this.x = -this.x), (this.y = -this.y), this
            },
            dot: function(t) {
              return this.x * t.x + this.y * t.y
            },
            cross: function(t) {
              return this.x * t.y - this.y * t.x
            },
            length: function() {
              return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            lengthSquared: function() {
              return this.x * this.x + this.y * this.y
            },
            distance: function(t) {
              return Math.sqrt(
                Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2)
              )
            },
            distanceSquared: function(t) {
              return Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2)
            },
            random: function(t, e, i) {
              var n =
                s.util.Random.randfloat(t || 0, e || 360) * Math.DEG_TO_RAD
              i = i || 1
              return (
                (this.x = Math.cos(n) * i), (this.y = Math.sin(n) * i), this
              )
            },
            normalize: function() {
              return this.div(this.length()), this
            },
            toString: function() {
              return '{x:{x}, y:{y}}'.format(this)
            },
            getDirection: function() {
              var t = this.toDegree()
              return t < 45
                ? 'right'
                : t < 135
                ? 'down'
                : t < 225
                ? 'left'
                : t < 315
                ? 'up'
                : 'right'
            },
            toAngle: function() {
              return (Math.atan2(this.y, this.x) + 2 * Math.PI) % (2 * Math.PI)
            },
            fromAngle: function(t, e) {
              return (
                (e = e || 1),
                (this.x = Math.cos(t) * e),
                (this.y = Math.sin(t) * e),
                this
              )
            },
            toDegree: function() {
              return this.toAngle().toDegree()
            },
            fromDegree: function(t, e) {
              return this.fromAngle(t.toRadian(), e)
            },
            rotate: function(t, e) {
              e = e || s.geom.Vector2(0, 0)
              var i = this.x - e.x,
                n = this.y - e.y,
                r = i * Math.cos(t) - n * Math.sin(t),
                o = i * Math.sin(t) + n * Math.cos(t)
              return this.set(e.x + r, e.y + o), this
            },
            _accessor: {},
            _static: {
              min: function(t, e) {
                return s.geom.Vector2(
                  t.x < e.x ? t.x : e.x,
                  t.y < e.y ? t.y : e.y
                )
              },
              max: function(t, e) {
                return s.geom.Vector2(
                  t.x > e.x ? t.x : e.x,
                  t.y > e.y ? t.y : e.y
                )
              },
              add: function(t, e) {
                return s.geom.Vector2(t.x + e.x, t.y + e.y)
              },
              sub: function(t, e) {
                return s.geom.Vector2(t.x - e.x, t.y - e.y)
              },
              mul: function(t, e) {
                return s.geom.Vector2(t.x * e, t.y * e)
              },
              div: function(t, e) {
                return s.geom.Vector2(t.x / e, t.y / e)
              },
              negate: function(t) {
                return s.geom.Vector2(-t.x, -t.y)
              },
              dot: function(t, e) {
                return t.x * e.x + t.y * e.y
              },
              cross: function(t, e) {
                return t.x * e.y - t.y * e.x
              },
              distance: function(t, e) {
                return Math.sqrt(
                  Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)
                )
              },
              distanceSquared: function(t, e) {
                return Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)
              },
              manhattanDistance: function(t, e) {
                return Math.abs(t.x - e.x) + Math.abs(t.y - e.y)
              },
              normal: function(t, e) {
                var i = s.geom.Vector2.sub(t, e)
                return s.geom.Vector2(-i.y, i.x)
              },
              reflect: function(t, e) {
                var i = s.geom.Vector2.dot(t, e),
                  n = s.geom.Vector2.mul(e, 2 * i)
                return s.geom.Vector2.sub(t, n)
              },
              wall: function(t, e) {
                var i = s.geom.Vector2.dot(t, e),
                  n = s.geom.Vector2.mul(e, i)
                return s.geom.Vector2.sub(t, n)
              },
              lerp: function(t, e, i) {
                return s.geom.Vector2(
                  t.x + (e.x - t.x) * i,
                  t.y + (e.y - t.y) * i
                )
              },
              slerp: function(t, e, i) {},
              random: function(t, e, i) {
                return s.geom
                  .Vector2()
                  .random(t, e)
                  .mul(i || 1)
              }
            }
          }),
            (s.geom.Vector2.ZERO = s.geom.Vector2(0, 0)),
            (s.geom.Vector2.LEFT = s.geom.Vector2(-1, 0)),
            (s.geom.Vector2.RIGHT = s.geom.Vector2(1, 0)),
            (s.geom.Vector2.UP = s.geom.Vector2(0, -1)),
            (s.geom.Vector2.DOWN = s.geom.Vector2(0, 1))
        }),
        s.namespace(function() {
          s.define('phina.geom.Vector3', {
            x: 0,
            y: 0,
            z: 0,
            init: function(t, e, i) {
              ;(this.x = t), (this.y = e), (this.z = i)
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.geom.Matrix33', {
            init: function() {
              arguments.length >= 9
                ? this.set.apply(this, arguments)
                : this.identity()
            },
            set: function(t, e, i, n, s, r, o, a, h) {
              return (
                (this.m00 = t),
                (this.m01 = e),
                (this.m02 = i),
                (this.m10 = n),
                (this.m11 = s),
                (this.m12 = r),
                (this.m20 = o),
                (this.m21 = a),
                (this.m22 = h),
                this
              )
            },
            identity: function() {
              return (
                (this.m00 = 1),
                (this.m01 = 0),
                (this.m02 = 0),
                (this.m10 = 0),
                (this.m11 = 1),
                (this.m12 = 0),
                (this.m20 = 0),
                (this.m21 = 0),
                (this.m22 = 1),
                this
              )
            },
            clone: function() {
              return s.geom.Matrix33(
                this.m00,
                this.m01,
                this.m02,
                this.m10,
                this.m11,
                this.m12,
                this.m20,
                this.m21,
                this.m22
              )
            },
            determinant: function() {
              var t = this.m00,
                e = this.m01,
                i = this.m02,
                n = this.m10,
                s = this.m11,
                r = this.m12,
                o = this.m20,
                a = this.m21,
                h = this.m22
              return (
                t * s * h +
                n * a * i +
                e * r * o -
                i * s * o -
                e * n * h -
                r * a * t
              )
            },
            transpose: function() {
              var t = function(t, e) {
                var i = this[t]
                ;(this[t] = this[e]), (this[e] = i)
              }.bind(this)
              return t('m01', 'm10'), t('m02', 'm20'), t('m12', 'm21'), this
            },
            invert: function() {
              var t = this.m00,
                e = this.m01,
                i = this.m02,
                n = this.m10,
                s = this.m11,
                r = this.m12,
                o = this.m20,
                a = this.m21,
                h = this.m22,
                u = this.determinant()
              return (
                (this.m00 = (s * h - r * a) / u),
                (this.m01 = ((n * h - r * o) / u) * -1),
                (this.m02 = (n * a - s * o) / u),
                (this.m10 = ((e * h - i * a) / u) * -1),
                (this.m11 = (t * h - i * o) / u),
                (this.m12 = ((t * a - e * o) / u) * -1),
                (this.m20 = (e * r - i * s) / u),
                (this.m21 = ((t * r - i * n) / u) * -1),
                (this.m22 = (t * s - e * n) / u),
                this.transpose(),
                this
              )
            },
            multiply: function(t) {
              this.m, t.m
              var e = this.m00,
                i = this.m01,
                n = this.m02,
                s = this.m10,
                r = this.m11,
                o = this.m12,
                a = this.m20,
                h = this.m21,
                u = this.m22,
                c = t.m00,
                l = t.m01,
                f = t.m02,
                d = t.m10,
                p = t.m11,
                g = t.m12,
                m = t.m20,
                y = t.m21,
                v = t.m22
              return (
                (this.m00 = e * c + i * d + n * m),
                (this.m01 = e * l + i * p + n * y),
                (this.m02 = e * f + i * g + n * v),
                (this.m10 = s * c + r * d + o * m),
                (this.m11 = s * l + r * p + o * y),
                (this.m12 = s * f + r * g + o * v),
                (this.m20 = a * c + h * d + u * m),
                (this.m21 = a * l + h * p + u * y),
                (this.m22 = a * f + h * g + u * v),
                this
              )
            },
            multiplyVector2: function(t) {
              var e = this.m00 * t.x + this.m01 * t.y + this.m02,
                i = this.m10 * t.x + this.m11 * t.y + this.m12
              return s.geom.Vector2(e, i)
            },
            getRow: function(t) {
              return 0 === t
                ? [this.m00, this.m01, this.m02]
                : 1 === t
                ? [this.m10, this.m11, this.m12]
                : 2 === t
                ? [this.m20, this.m21, this.m22]
                : null
            },
            getCol: function(t) {
              return 0 === t
                ? [this.m00, this.m10, this.m20]
                : 1 === t
                ? [this.m01, this.m11, this.m21]
                : 2 === t
                ? [this.m02, this.m12, this.m22]
                : null
            },
            toString: function() {
              return '|{m00}, {m01}, {m02}|\n|{m10}, {m11}, {m12}|\n|{m20}, {m21}, {m22}|'.format(
                this
              )
            }
          }),
            (s.geom.Matrix33.IDENTITY = s.geom.Matrix33().identity())
        }),
        s.namespace(function() {
          s.define('phina.geom.Rect', {
            x: 0,
            y: 0,
            width: 32,
            height: 32,
            init: function(t, e, i, n) {
              this.set(t, e, i, n)
            },
            set: function(t, e, i, n) {
              return (
                (this.x = t),
                (this.y = e),
                (this.width = i),
                (this.height = n),
                this
              )
            },
            moveTo: function(t, e) {
              return (this.x = t), (this.y = e), this
            },
            moveBy: function(t, e) {
              return (this.x += t), (this.y += e), this
            },
            setSize: function(t, e) {
              return (this.width = t), (this.height = e), this
            },
            padding: function(t, e, i, n) {
              switch (arguments.length) {
                case 1:
                  t = e = i = n = arguments[0]
                  break
                case 2:
                  ;(t = i = arguments[0]), (e = n = arguments[1])
                  break
                case 3:
                  ;(t = arguments[0]),
                    (e = n = arguments[1]),
                    (i = arguments[2])
              }
              return (
                (this.x += n),
                (this.y += t),
                (this.width -= n + e),
                (this.height -= t + i),
                this
              )
            },
            contains: function(t, e) {
              return (
                this.left <= t &&
                t <= this.right &&
                this.top <= e &&
                e <= this.bottom
              )
            },
            clone: function() {
              return s.geom.Rect(this.x, this.y, this.width, this.height)
            },
            toCircle: function() {
              var t = (this.width < this.height ? this.width : this.height) / 2
              return s.geom.Circle(this.centerX, this.centerY, t)
            },
            toArray: function() {
              return [this.x, this.y, this.width, this.height]
            },
            _accessor: {
              left: {
                get: function() {
                  return this.x
                },
                set: function(t) {
                  ;(this.width -= t - this.x), (this.x = t)
                }
              },
              top: {
                get: function() {
                  return this.y
                },
                set: function(t) {
                  ;(this.height -= t - this.y), (this.y = t)
                }
              },
              right: {
                get: function() {
                  return this.x + this.width
                },
                set: function(t) {
                  this.width += t - this.right
                }
              },
              bottom: {
                get: function() {
                  return this.y + this.height
                },
                set: function(t) {
                  this.height += t - this.bottom
                }
              },
              centerX: {
                get: function() {
                  return this.x + this.width / 2
                },
                set: function(t) {}
              },
              centerY: {
                get: function() {
                  return this.y + this.height / 2
                },
                set: function(t) {}
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.geom.Circle', {
            x: 0,
            y: 0,
            radius: 32,
            init: function(t, e, i) {
              this.set(t, e, i)
            },
            set: function(t, e, i) {
              return (this.x = t), (this.y = e), (this.radius = i), this
            },
            moveTo: function(t, e) {
              return (this.x = t), (this.y = e), this
            },
            moveBy: function(t, e) {
              return (this.x += t), (this.y += e), this
            },
            contains: function(t, e) {
              var i = this.x - t,
                n = this.y - e
              return i * i + n * n <= this.radius * this.radius
            },
            clone: function() {
              return s.geom.Circle(this.x, this.y, this.radius)
            },
            toRect: function() {
              var t = this.size
              return s.geom.Rect(
                this.x - this.radius,
                this.y - this.radius,
                t,
                t
              )
            },
            toArray: function() {
              return [this.x, this.y, this.radius]
            },
            _accessor: {
              left: {
                get: function() {
                  return this.x - this.radius
                },
                set: function(t) {}
              },
              top: {
                get: function() {
                  return this.y - this.radius
                },
                set: function(t) {}
              },
              right: {
                get: function() {
                  return this.x + this.radius
                },
                set: function(t) {}
              },
              bottom: {
                get: function() {
                  return this.y + this.radius
                },
                set: function(t) {}
              },
              size: {
                get: function() {
                  return 2 * this.radius
                },
                set: function(t) {}
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.geom.Collision', {
            _static: {
              testCircleCircle: function(t, e) {
                return (
                  s.geom.Vector2.distanceSquared(t, e) <=
                  Math.pow(t.radius + e.radius, 2)
                )
              },
              testRectRect: function(t, e) {
                return (
                  t.left < e.right &&
                  t.right > e.left &&
                  t.top < e.bottom &&
                  t.bottom > e.top
                )
              },
              testCircleRect: function(t, e) {
                if (
                  !1 ===
                  s.geom
                    .Rect(
                      e.left - t.radius,
                      e.top - t.radius,
                      e.width + 2 * t.radius,
                      e.height + 2 * t.radius
                    )
                    .contains(t.x, t.y)
                )
                  return !1
                var i = s.geom.Rect(
                  e.left - t.radius,
                  e.top,
                  e.width + 2 * t.radius,
                  e.height
                )
                if (i.contains(t.x, t.y)) return !0
                if (
                  (i.set(
                    e.left,
                    e.top - t.radius,
                    e.width,
                    e.height + 2 * t.radius
                  ),
                  i.contains(t.x, t.y))
                )
                  return !0
                var n = s.geom.Circle(t.x, t.y, t.radius)
                return (
                  !!n.contains(e.left, e.top) ||
                  !!n.contains(e.right, e.top) ||
                  !!n.contains(e.right, e.bottom) ||
                  !!n.contains(e.left, e.bottom)
                )
              },
              testCircleLine: function(t, e, i) {
                if (t.contains(e.x, e.y) || t.contains(i.x, i.y)) return !0
                var n = t.radius * t.radius,
                  r = s.geom.Vector2(t.x, t.y),
                  o = s.geom.Vector2.sub(e, i),
                  a = s.geom.Vector2.sub(e, r),
                  h = s.geom.Vector2.sub(i, r),
                  u = s.geom.Vector2.cross(o, a)
                if (
                  (u * u) / o.lengthSquared() <= n &&
                  s.geom.Vector2.dot(a, o) * s.geom.Vector2.dot(h, o) <= 0
                )
                  return !0
                return !1
              },
              testLineLine: function(t, e, i, n) {
                if (t.x == e.x && t.x == i.x && t.x == n.x) {
                  var s = Math.min(t.y, e.y),
                    r = Math.max(t.y, e.y)
                  return (s <= i.y && i.y <= r) || (s <= n.y && n.y <= r)
                }
                if (t.y == e.y && t.y == i.y && t.y == n.y) {
                  ;(s = Math.min(t.x, e.x)), (r = Math.max(t.x, e.x))
                  return (s <= i.x && i.x <= r) || (s <= n.x && n.x <= r)
                }
                var o = (t.x - e.x) * (i.y - t.y) + (t.y - e.y) * (t.x - i.x),
                  a = (t.x - e.x) * (n.y - t.y) + (t.y - e.y) * (t.x - n.x),
                  h = (i.x - n.x) * (t.y - i.y) + (i.y - n.y) * (i.x - t.x),
                  u = (i.x - n.x) * (e.y - i.y) + (i.y - n.y) * (i.x - e.x)
                return o * a <= 0 && h * u <= 0
              },
              testRectLine: function(t, e, i) {
                if (
                  t.left <= e.x &&
                  e.x <= t.right &&
                  t.top <= e.y &&
                  e.y <= t.bottom
                )
                  return !0
                var n = s.geom.Vector2(t.left, t.top),
                  r = s.geom.Vector2(t.right, t.top),
                  o = s.geom.Vector2(t.right, t.bottom),
                  a = s.geom.Vector2(t.left, t.bottom)
                return (
                  !!s.geom.Collision.testLineLine(e, i, n, r) ||
                  !!s.geom.Collision.testLineLine(e, i, r, o) ||
                  !!s.geom.Collision.testLineLine(e, i, o, a) ||
                  !!s.geom.Collision.testLineLine(e, i, n, a)
                )
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.util.Support', {
            _static: {
              canvas: !!s.global.CanvasRenderingContext2D,
              webGL:
                !!s.global.CanvasRenderingContext2D &&
                !!document.createElement('canvas').getContext('webgl'),
              webAudio:
                !!s.global.AudioContext ||
                !!s.global.webkitAudioContext ||
                !!s.global.mozAudioContext
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.util.EventDispatcher', {
            init: function() {
              this._listeners = {}
            },
            on: function(t, e) {
              return (
                void 0 === this._listeners[t] && (this._listeners[t] = []),
                this._listeners[t].push(e),
                this
              )
            },
            off: function(t, e) {
              var i = this._listeners[t],
                n = i.indexOf(e)
              return -1 != n && i.splice(n, 1), this
            },
            fire: function(t) {
              t.target = this
              var e = 'on' + t.type
              this[e] && this[e](t)
              var i = this._listeners[t.type]
              if (i)
                for (var n = i.clone(), s = 0, r = n.length; s < r; ++s)
                  n[s].call(this, t)
              return this
            },
            flare: function(t, e) {
              var i = {type: t}
              return (
                e &&
                  e.forIn(function(t, e) {
                    i[t] = e
                  }),
                this.fire(i),
                this
              )
            },
            one: function(t, e) {
              var i = this,
                n = function() {
                  var s = e.apply(i, arguments)
                  return i.off(t, n), s
                }
              return this.on(t, n), this
            },
            has: function(t) {
              return (
                (void 0 !== this._listeners[t] &&
                  0 !== this._listeners[t].length) ||
                !!this['on' + t]
              )
            },
            clear: function(t) {
              var e = 'on' + t
              return this[e] && delete this[e], (this._listeners[t] = []), this
            }
          }),
            {
              addEventListener: 'on',
              removeEventListener: 'off',
              clearEventListener: 'clear',
              hasEventListener: 'has',
              dispatchEvent: 'fire',
              dispatchEventByType: 'flare'
            }.forIn(function(t, e) {
              s.util.EventDispatcher.prototype.$method(
                t,
                s.util.EventDispatcher.prototype[e]
              )
            })
        }),
        s.define('phina.util.Tween', {
          superClass: 'phina.util.EventDispatcher',
          init: function(t) {
            this.superInit(), (this.time = 0)
          },
          fromTo: function(t, e, i, n, s) {
            for (var r in ((this.target = t),
            (this.beginProps = e),
            (this.finishProps = i),
            (this.duration = n || 1e3),
            (this.easing = s),
            (this.changeProps = {}),
            e))
              this.changeProps[r] = i[r] - e[r]
            return this
          },
          to: function(t, e, i, n) {
            var s = {}
            for (var r in e) s[r] = t[r]
            return this.fromTo(t, s, e, i, n), this
          },
          from: function(t, e, i, n) {
            var s = {}
            for (var r in e) (s[r] = t[r]), (t[r] = e[r])
            return this.fromTo(t, e, s, i, n), this
          },
          by: function(t, e, i, n) {
            var s = {},
              r = {}
            for (var o in e) (s[o] = t[o]), (r[o] = t[o] + e[o])
            return this.fromTo(t, s, r, i, n), this
          },
          yoyo: function() {
            var t = this.beginProps
            return (
              (this.beginProps = this.finishProps),
              (this.finishProps = t),
              this.changeProps.forIn(function(t, e, i) {
                ;(this.changeProps[t] = -e),
                  (this.target[t] = this.beginProps[t])
              }, this),
              this
            )
          },
          gain: function(t) {
            this.seek(this.time + t)
          },
          forward: function(t) {
            this.seek(this.time + t)
          },
          backward: function(t) {
            this.seek(this.time - t)
          },
          seek: function(t) {
            return (
              (this.time = Math.clamp(t, 0, this.duration)),
              this.beginProps.forIn(function(t, e) {
                var i = this.easing(
                  this.time,
                  e,
                  this.changeProps[t],
                  this.duration
                )
                this.target[t] = i
              }, this),
              this
            )
          },
          _accessor: {
            easing: {
              get: function() {
                return this._easing
              },
              set: function(t) {
                this._easing =
                  s.util.Tween.EASING[t] || s.util.Tween.EASING.default
              }
            }
          },
          _static: {
            EASING: {
              default: function(t, e, i, n) {
                return (i * t) / n + e
              },
              linear: function(t, e, i, n) {
                return (i * t) / n + e
              },
              swing: function(t, e, i, n) {
                return -i * (t /= n) * (t - 2) + e
              },
              easeInQuad: function(t, e, i, n) {
                return i * (t /= n) * t + e
              },
              easeOutQuad: function(t, e, i, n) {
                return -i * (t /= n) * (t - 2) + e
              },
              easeInOutQuad: function(t, e, i, n) {
                return (t /= n / 2) < 1
                  ? (i / 2) * t * t + e
                  : (-i / 2) * (--t * (t - 2) - 1) + e
              },
              easeInCubic: function(t, e, i, n) {
                return i * (t /= n) * t * t + e
              },
              easeOutCubic: function(t, e, i, n) {
                return i * ((t = t / n - 1) * t * t + 1) + e
              },
              easeInOutCubic: function(t, e, i, n) {
                return (t /= n / 2) < 1
                  ? (i / 2) * t * t * t + e
                  : (i / 2) * ((t -= 2) * t * t + 2) + e
              },
              easeOutInCubic: function(t, e, i, n) {
                return t < n / 2
                  ? s.util.Tween.EASING.easeOutCubic(2 * t, e, i / 2, n)
                  : s.util.Tween.EASING.easeInCubic(
                      2 * t - n,
                      e + i / 2,
                      i / 2,
                      n
                    )
              },
              easeInQuart: function(t, e, i, n) {
                return i * (t /= n) * t * t * t + e
              },
              easeOutQuart: function(t, e, i, n) {
                return -i * ((t = t / n - 1) * t * t * t - 1) + e
              },
              easeInOutQuart: function(t, e, i, n) {
                return (t /= n / 2) < 1
                  ? (i / 2) * t * t * t * t + e
                  : (-i / 2) * ((t -= 2) * t * t * t - 2) + e
              },
              easeOutInQuart: function(t, e, i, n) {
                return t < n / 2
                  ? s.util.Tween.EASING.easeOutQuart(2 * t, e, i / 2, n)
                  : s.util.Tween.EASING.easeInQuart(
                      2 * t - n,
                      e + i / 2,
                      i / 2,
                      n
                    )
              },
              easeInQuint: function(t, e, i, n) {
                return i * (t /= n) * t * t * t * t + e
              },
              easeOutQuint: function(t, e, i, n) {
                return i * ((t = t / n - 1) * t * t * t * t + 1) + e
              },
              easeInOutQuint: function(t, e, i, n) {
                return (t /= n / 2) < 1
                  ? (i / 2) * t * t * t * t * t + e
                  : (i / 2) * ((t -= 2) * t * t * t * t + 2) + e
              },
              easeOutInQuint: function(t, e, i, n) {
                return t < n / 2
                  ? s.util.Tween.EASING.easeOutQuint(2 * t, e, i / 2, n)
                  : s.util.Tween.EASING.easeInQuint(
                      2 * t - n,
                      e + i / 2,
                      i / 2,
                      n
                    )
              },
              easeInSine: function(t, e, i, n) {
                return -i * Math.cos((t / n) * (Math.PI / 2)) + i + e
              },
              easeOutSine: function(t, e, i, n) {
                return i * Math.sin((t / n) * (Math.PI / 2)) + e
              },
              easeInOutSine: function(t, e, i, n) {
                return (-i / 2) * (Math.cos((Math.PI * t) / n) - 1) + e
              },
              easeOutInSine: function(t, e, i, n) {
                return t < n / 2
                  ? s.util.Tween.EASING.easeOutSine(2 * t, e, i / 2, n)
                  : s.util.Tween.EASING.easeInSine(
                      2 * t - n,
                      e + i / 2,
                      i / 2,
                      n
                    )
              },
              easeInExpo: function(t, e, i, n) {
                return 0 == t
                  ? e
                  : i * Math.pow(2, 10 * (t / n - 1)) + e - 0.001 * i
              },
              easeOutExpo: function(t, e, i, n) {
                return t == n
                  ? e + i
                  : 1.001 * i * (1 - Math.pow(2, (-10 * t) / n)) + e
              },
              easeInOutExpo: function(t, e, i, n) {
                return 0 == t
                  ? e
                  : t == n
                  ? e + i
                  : (t /= n / 2) < 1
                  ? (i / 2) * Math.pow(2, 10 * (t - 1)) + e - 5e-4 * i
                  : (i / 2) * 1.0005 * (2 - Math.pow(2, -10 * --t)) + e
              },
              easeOutInExpo: function(t, e, i, n) {
                return t < n / 2
                  ? s.util.Tween.EASING.easeOutExpo(2 * t, e, i / 2, n)
                  : s.util.Tween.EASING.easeInExpo(
                      2 * t - n,
                      e + i / 2,
                      i / 2,
                      n
                    )
              },
              easeInCirc: function(t, e, i, n) {
                return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e
              },
              easeOutCirc: function(t, e, i, n) {
                return i * Math.sqrt(1 - (t = t / n - 1) * t) + e
              },
              easeInOutCirc: function(t, e, i, n) {
                return (t /= n / 2) < 1
                  ? (-i / 2) * (Math.sqrt(1 - t * t) - 1) + e
                  : (i / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
              },
              easeOutInCirc: function(t, e, i, n) {
                return t < n / 2
                  ? s.util.Tween.EASING.easeOutCirc(2 * t, e, i / 2, n)
                  : s.util.Tween.EASING.easeInCirc(
                      2 * t - n,
                      e + i / 2,
                      i / 2,
                      n
                    )
              },
              easeInElastic: function(t, e, i, n, s, r) {
                var o
                return 0 == t
                  ? e
                  : 1 == (t /= n)
                  ? e + i
                  : (r || (r = 0.3 * n),
                    !s || s < Math.abs(i)
                      ? ((s = i), (o = r / 4))
                      : (o = (r / (2 * Math.PI)) * Math.asin(i / s)),
                    -s *
                      Math.pow(2, 10 * (t -= 1)) *
                      Math.sin(((t * n - o) * (2 * Math.PI)) / r) +
                      e)
              },
              easeOutElastic: function(t, e, i, n, s, r) {
                var o
                return 0 == t
                  ? e
                  : 1 == (t /= n)
                  ? e + i
                  : (r || (r = 0.3 * n),
                    !s || s < Math.abs(i)
                      ? ((s = i), (o = r / 4))
                      : (o = (r / (2 * Math.PI)) * Math.asin(i / s)),
                    s *
                      Math.pow(2, -10 * t) *
                      Math.sin(((t * n - o) * (2 * Math.PI)) / r) +
                      i +
                      e)
              },
              easeInOutElastic: function(t, e, i, n, s, r) {
                var o
                return 0 == t
                  ? e
                  : 2 == (t /= n / 2)
                  ? e + i
                  : (r || (r = n * (0.3 * 1.5)),
                    !s || s < Math.abs(i)
                      ? ((s = i), (o = r / 4))
                      : (o = (r / (2 * Math.PI)) * Math.asin(i / s)),
                    t < 1
                      ? s *
                          Math.pow(2, 10 * (t -= 1)) *
                          Math.sin(((t * n - o) * (2 * Math.PI)) / r) *
                          -0.5 +
                        e
                      : s *
                          Math.pow(2, -10 * (t -= 1)) *
                          Math.sin(((t * n - o) * (2 * Math.PI)) / r) *
                          0.5 +
                        i +
                        e)
              },
              easeOutInElastic: function(t, e, i, n, r, o) {
                return t < n / 2
                  ? s.util.Tween.EASING.easeOutElastic(2 * t, e, i / 2, n, r, o)
                  : s.util.Tween.EASING.easeInElastic(
                      2 * t - n,
                      e + i / 2,
                      i / 2,
                      n,
                      r,
                      o
                    )
              },
              easeInBack: function(t, e, i, n, s) {
                return (
                  null == s && (s = 1.70158),
                  i * (t /= n) * t * ((s + 1) * t - s) + e
                )
              },
              easeOutBack: function(t, e, i, n, s) {
                return (
                  null == s && (s = 1.70158),
                  i * ((t = t / n - 1) * t * ((s + 1) * t + s) + 1) + e
                )
              },
              easeInOutBack: function(t, e, i, n, s) {
                return (
                  null == s && (s = 1.70158),
                  (t /= n / 2) < 1
                    ? (i / 2) * (t * t * ((1 + (s *= 1.525)) * t - s)) + e
                    : (i / 2) *
                        ((t -= 2) * t * ((1 + (s *= 1.525)) * t + s) + 2) +
                      e
                )
              },
              easeOutInBack: function(t, e, i, n, r) {
                return t < n / 2
                  ? s.util.Tween.EASING.easeOutBack(2 * t, e, i / 2, n, r)
                  : s.util.Tween.EASING.easeInBack(
                      2 * t - n,
                      e + i / 2,
                      i / 2,
                      n,
                      r
                    )
              },
              easeInBounce: function(t, e, i, n) {
                return i - s.util.Tween.EASING.easeOutBounce(n - t, 0, i, n) + e
              },
              easeOutBounce: function(t, e, i, n) {
                return (t /= n) < 1 / 2.75
                  ? i * (7.5625 * t * t) + e
                  : t < 2 / 2.75
                  ? i * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + e
                  : t < 2.5 / 2.75
                  ? i * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + e
                  : i * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + e
              },
              easeInOutBounce: function(t, e, i, n) {
                return t < n / 2
                  ? 0.5 * s.util.Tween.EASING.easeInBounce(2 * t, 0, i, n) + e
                  : 0.5 *
                      s.util.Tween.EASING.easeOutBounce(2 * t - n, 0, i, n) +
                      0.5 * i +
                      e
              },
              easeOutInBounce: function(t, e, i, n) {
                return t < n / 2
                  ? s.util.Tween.EASING.easeOutBounce(2 * t, e, i / 2, n)
                  : s.util.Tween.EASING.easeInBounce(
                      2 * t - n,
                      e + i / 2,
                      i / 2,
                      n
                    )
              }
            }
          }
        }),
        s.define('phina.util.Ticker', {
          superClass: 'phina.util.EventDispatcher',
          frame: null,
          deltaTime: null,
          elapsedTime: null,
          init: function() {
            this.superInit(),
              (this.fps = 30),
              (this.frame = 0),
              (this.deltaTime = 0),
              (this.elapsedTime = 0),
              (this.isPlaying = !0),
              (this.runner = s.util.Ticker.runner)
          },
          tick: function(t) {
            this.on('tick', t)
          },
          untick: function(t) {
            this.off('tick', t)
          },
          run: function() {
            var t = new Date().getTime()
            ;(this.deltaTime = t - this.currentTime),
              (this.elapsedTime = t - this.startTime)
            var e = (this.currentTime = t)
            this.flare('tick')
            var i = new Date().getTime()
            this.frame += 1
            var n = i - e
            return Math.max(this.frameTime - n, 0)
          },
          start: function() {
            var t = this
            ;(this.isPlaying = !0),
              (this.startTime = this.currentTime = new Date().getTime())
            var e = function() {
              if (t.isPlaying) {
                var i = t.run()
                t.runner(e, i)
              }
            }
            return e(), this
          },
          resume: function() {},
          stop: function() {
            return (this.isPlaying = !1), this
          },
          rewind: function() {},
          _accessor: {
            fps: {
              get: function() {
                return this._fps
              },
              set: function(t) {
                ;(this._fps = t), (this.frameTime = 1e3 / this._fps)
              }
            }
          },
          _static: {
            runner: function(t, e) {
              setTimeout(t, e)
            }
          }
        }),
        s.define('phina.util.Grid', {
          width: 640,
          columns: 12,
          loop: !1,
          offset: 0,
          init: function() {
            if ('object' == typeof arguments[0])
              var t = arguments[0],
                e = t.width || 640,
                i = t.columns || 12,
                n = t.loop || !1,
                s = t.offset || 0
            else
              (e = arguments[0] || 640),
                (i = arguments[1] || 12),
                (n = arguments[2] || !1),
                (s = arguments[3] || 0)
            ;(this.width = e),
              (this.columns = i),
              (this.loop = n),
              (this.offset = s),
              (this.unitWidth = this.width / this.columns)
          },
          span: function(t) {
            return (
              this.loop && ((t += this.columns), (t %= this.columns)),
              this.unitWidth * t + this.offset
            )
          },
          unit: function() {
            return this.unitWidth
          },
          center: function(t) {
            var e = t || 0
            return this.width / 2 + this.unitWidth * e
          }
        }),
        s.namespace(function() {
          s.define('phina.util.ChangeDispatcher', {
            superClass: 'phina.util.EventDispatcher',
            init: function() {
              this.superInit(), (this._observe = !0)
            },
            register: function(t, e) {
              if (1 === arguments.length) {
                var i = arguments[0]
                i.forIn(function(t, e) {
                  this.register(t, e)
                }, this)
              } else {
                var n = '__' + t
                ;(this[n] = e),
                  this.accessor(t, {
                    get: function() {
                      return this[n]
                    },
                    set: function(t) {
                      ;(this[n] = t), this._observe && this.flare('change')
                    }
                  })
              }
              return this
            },
            observe: function() {
              this._observe = !0
            },
            unobserve: function() {
              this._observe = !1
            }
          })
        }),
        s.define('phina.util.Flow', {
          superClass: 'phina.util.EventDispatcher',
          init: function(t, e) {
            if (
              (this.superInit(),
              (this.status = 'pending'),
              (this.resultValue = null),
              (this._queue = []),
              (this.func = t),
              !0 !== e)
            ) {
              var i = this
              this.func(
                function() {
                  i.resolve.apply(i, arguments), (i.status = 'resolved')
                },
                function() {
                  i.reject.apply(i, arguments), (i.status = 'rejected')
                }
              )
            }
          },
          resolve: function(t) {
            ;(this.resultValue = t),
              this._queue.each(function(t) {
                t(this.resultValue)
              }, this),
              this._queue.clear()
          },
          reject: function() {},
          then: function(t) {
            if ('resolved' === this.status) {
              var e = t(this.resultValue)
              return s.util.Flow.resolve(e)
            }
            var i = s.util.Flow(function(t) {
              t()
            }, !0)
            return (
              this._queue.push(function(e) {
                var n = t(e)
                n instanceof s.util.Flow
                  ? n.then(function(t) {
                      i.resolve(t)
                    })
                  : i.resolve(e)
              }),
              i
            )
          },
          _static: {
            resolve: function(t) {
              return t instanceof s.util.Flow
                ? t
                : s.util.Flow(function(e) {
                    e(t)
                  })
            },
            all: function(t) {
              return s.util.Flow(function(e) {
                var i = 0,
                  n = []
                t.each(function(s) {
                  s.then(function(s) {
                    ++i, n.push(s), i >= t.length && e(n)
                  })
                })
              })
            }
          }
        }),
        s.namespace(function() {
          s.define('phina.util.Color', {
            r: 255,
            g: 255,
            b: 255,
            a: 1,
            init: function(t, e, i, n) {
              this.set.apply(this, arguments)
            },
            set: function(t, e, i, n) {
              return (
                (this.r = t),
                (this.g = e),
                (this.b = i),
                (this.a = void 0 !== n ? n : 1),
                this
              )
            },
            setFromNumber: function(t, e, i, n) {
              return (
                (this.r = t),
                (this.g = e),
                (this.b = i),
                (this.a = void 0 !== n ? n : 1),
                this
              )
            },
            setFromArray: function(t) {
              return this.set.apply(this, t)
            },
            setFromObject: function(t) {
              return this.set(t.r, t.g, t.b, t.a)
            },
            setFromString: function(t) {
              var e = s.util.Color.stringToNumber(t)
              return this.set(e[0], e[1], e[2], e[3])
            },
            setSmart: function() {
              var t = arguments[0]
              return (
                arguments.length >= 3
                  ? this.set(arguments.r, arguments.g, arguments.b, arguments.a)
                  : t instanceof Array
                  ? this.setFromArray(t)
                  : t instanceof Object
                  ? this.setFromObject(t)
                  : 'string' == typeof t && this.setFromString(t),
                this
              )
            },
            toStyleAsHex: function() {
              return '#{0}{1}{2}'.format(
                this.r.toString(16).padding(2, '0'),
                this.g.toString(16).padding(2, '0'),
                this.b.toString(16).padding(2, '0')
              )
            },
            toStyleAsRGB: function() {
              return 'rgb({r},{g},{b})'.format({
                r: ~~this.r,
                g: ~~this.g,
                b: ~~this.b
              })
            },
            toStyleAsRGBA: function() {
              return 'rgba({r},{g},{b},{a})'.format({
                r: ~~this.r,
                g: ~~this.g,
                b: ~~this.b,
                a: this.a
              })
            },
            toStyle: function() {
              return 'rgba({r},{g},{b},{a})'.format({
                r: ~~this.r,
                g: ~~this.g,
                b: ~~this.b,
                a: this.a
              })
            },
            _static: {
              COLOR_LIST: {
                black: [0, 0, 0],
                silver: [192, 192, 192],
                gray: [128, 128, 128],
                white: [255, 255, 255],
                maroon: [128, 0, 0],
                red: [255, 0, 0],
                purple: [128, 0, 128],
                fuchsia: [255, 0, 255],
                green: [0, 128, 0],
                lime: [0, 255, 0],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                navy: [0, 0, 128],
                blue: [0, 0, 255],
                teal: [0, 128, 128],
                aqua: [0, 255, 255]
              },
              strToNum: function(t) {
                return this.stringToNumber(t)
              },
              stringToNumber: function(e) {
                var i = null,
                  n = null
                if (
                  ('#' === e[0]
                    ? (n = 4 == e.length ? 'hex111' : 'hex222')
                    : 'r' === e[0] && 'g' === e[1] && 'b' === e[2]
                    ? (n = 'a' == e[3] ? 'rgba' : 'rgb')
                    : 'h' === e[0] &&
                      's' === e[1] &&
                      'l' === e[2] &&
                      (n = 'a' == e[3] ? 'hsla' : 'hsl'),
                  n)
                ) {
                  var r = t[n],
                    o = e.match(r.reg)
                  i = r.exec(o)
                } else
                  s.util.Color.COLOR_LIST[e] && (i = s.util.Color.COLOR_LIST[e])
                return i
              },
              HSLtoRGB: function(t, e, i) {
                var n, s, r
                if (
                  ((t %= 360),
                  (t += 360),
                  (t %= 360),
                  (i *= 0.01),
                  0 === (e *= 0.01))
                )
                  return [(i = Math.round(255 * i)), i, i]
                var o = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - o,
                  h = (t + 120) % 360
                return (
                  (n = h < 60 ? a + ((o - a) * h) / 60 : h < 180 ? o : a),
                  (s =
                    (h = t) < 60
                      ? a + ((o - a) * h) / 60
                      : h < 180
                      ? o
                      : h < 240
                      ? a + ((o - a) * (240 - h)) / 60
                      : a),
                  (r =
                    (h = (t - 120 + 360) % 360) < 60
                      ? a + ((o - a) * h) / 60
                      : h < 180
                      ? o
                      : h < 240
                      ? a + ((o - a) * (240 - h)) / 60
                      : a),
                  [parseInt(255 * n), parseInt(255 * s), parseInt(255 * r)]
                )
              },
              HSLAtoRGBA: function(t, e, i, n) {
                var r = s.util.Color.HSLtoRGB(t, e, i)
                return (r[3] = n), r
              },
              createStyleRGB: function(t, e, i) {
                return 'rgba(' + t + ',' + e + ',' + i + ')'
              },
              createStyleRGBA: function(t, e, i, n) {
                return 'rgba(' + t + ',' + e + ',' + i + ',' + n + ')'
              },
              createStyleHSL: function(t, e, i) {
                return 'hsl(' + t + ',' + e + '%,' + i + '%)'
              },
              createStyleHSLA: function(t, e, i, n) {
                return 'hsla(' + t + ',' + e + '%,' + i + '%,' + n + ')'
              }
            }
          })
          var t = {
            hex111: {
              reg: /^#(\w{1})(\w{1})(\w{1})$/,
              exec: function(t) {
                return [
                  parseInt(t[1] + t[1], 16),
                  parseInt(t[2] + t[2], 16),
                  parseInt(t[3] + t[3], 16)
                ]
              }
            },
            hex222: {
              reg: /^#(\w{2})(\w{2})(\w{2})$/,
              exec: function(t) {
                return [
                  parseInt(t[1], 16),
                  parseInt(t[2], 16),
                  parseInt(t[3], 16)
                ]
              }
            },
            rgb: {
              reg: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
              exec: function(t) {
                return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])]
              }
            },
            rgba: {
              reg: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1}(\.{1}\d+)?)\)$/,
              exec: function(t) {
                return [
                  parseInt(t[1]),
                  parseInt(t[2]),
                  parseInt(t[3]),
                  parseFloat(t[4])
                ]
              }
            },
            hsl: {
              reg: /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
              exec: function(t) {
                return s.util.Color.HSLtoRGB(t[1], t[2], t[3])
              }
            },
            hsla: {
              reg: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1}(\.{1}\d+)?)\)$/,
              exec: function(t) {
                return s.util.Color.HSLAtoRGBA(t[1], t[2], t[3], t[4])
              }
            }
          }
        }),
        s.namespace(function() {
          s.define('phina.util.Random', {
            seed: 1,
            init: function(t) {
              this.seed = t || Date.now() || 1
            },
            random: function() {
              var t = this.seed
              return (
                (t ^= t << 13),
                (t ^= t >>> 17),
                (t ^= t << 5),
                (this.seed = t),
                (t >>> 0) / s.util.Random.MAX
              )
            },
            randint: function(t, e) {
              return Math.floor(this.random() * (e - t + 1)) + t
            },
            randfloat: function(t, e) {
              return this.random() * (e - t) + t
            },
            randbool: function() {
              return 1 === this.randint(0, 1)
            },
            randarray: function(t, e, i) {
              return (
                (e = e || 0),
                (i = i || 100),
                (t = t || 100).map(function() {
                  return this.randint(e, i)
                }, this)
              )
            },
            _accessor: {
              seed: {
                get: function() {
                  return this._seed
                },
                set: function(t) {
                  this._seed = t >>> 0 || 1
                }
              }
            },
            _static: {
              MAX: 4294967295,
              seed: Date.now(),
              getSeed: function() {
                return this.seed
              },
              setSeed: function(t) {
                return (this.seed = t >>> 0 || 1), this
              },
              random: function() {
                return (
                  (this.seed = this.xor32(this.seed)),
                  (this.seed >>> 0) / s.util.Random.MAX
                )
              },
              randint: function(t, e) {
                return s.global.Math.floor(this.random() * (e - t + 1)) + t
              },
              randfloat: function(t, e) {
                return this.random() * (e - t) + t
              },
              randbool: function() {
                return 1 === this.randint(0, 1)
              },
              randarray: function(t, e, i) {
                return (
                  (e = e || 0),
                  (i = i || 100),
                  (t = t || 100).map(function() {
                    return this.randint(e, i)
                  }, this)
                )
              },
              xor32: function(t) {
                return (t ^= t << 13), (t ^= t >>> 17), (t ^= t << 5)
              },
              uuid: function() {
                var t = new Date().getTime()
                return (
                  s.global.performance &&
                    'function' == typeof s.global.performance.now &&
                    (t += performance.now()),
                  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
                    /[xy]/g,
                    function(e) {
                      var i = (t + 16 * Math.random()) % 16 | 0
                      return (
                        (t = Math.floor(t / 16)),
                        ('x' == e ? i : (3 & i) | 8).toString(16)
                      )
                    }
                  )
                )
              }
            }
          }),
            Math.$method('randint', function(t, e) {
              return s.util.Random.randint(t, e)
            }),
            Math.$method('randfloat', function(t, e) {
              return s.util.Random.randfloat(t, e)
            })
        }),
        s.namespace(function() {
          s.define('phina.util.QueryString', {
            _static: {
              parse: function(t, e, i, n) {
                ;(t = t || location.search.substr(1)),
                  (e = e || '&'),
                  (i = i || '=')
                var s = n
                  ? decodeURIComponent
                  : function(t) {
                      return t
                    }
                return t.split(e).reduce(function(t, e) {
                  var n = e.split(i)
                  return (t[n[0]] = s(n[1])), t
                }, {})
              },
              stringify: function(t, e, i, n) {
                ;(e = e || '&'), (i = i || '=')
                var s = n
                  ? encodeURIComponent
                  : function(t) {
                      return t
                    }
                return Object.keys(t)
                  .map(function(e) {
                    return e + i + s(t[e])
                  })
                  .join(e)
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.util.Ajax', {
            _static: {
              defaults: {
                type: 'GET',
                contentType: 'application/x-www-form-urlencoded',
                responseType: 'json',
                data: null,
                url: ''
              },
              request: function(t) {
                var e = {}.$safe(t, this.defaults),
                  i = new XMLHttpRequest()
                return s.util.Flow(function(t) {
                  ;(i.onreadystatechange = function() {
                    4 === i.readyState &&
                      -1 !== [200, 201, 0].indexOf(i.status) &&
                      t(i.response)
                  }),
                    i.open(e.type, e.url),
                    (i.responseType = e.responseType),
                    i.send(null)
                })
              },
              get: function(t) {
                return this.request({type: 'GET', url: t})
              },
              post: function(t) {
                return this.request({type: 'POST', url: t})
              },
              put: function(t) {
                return this.request({type: 'PUT', url: t})
              },
              del: function(t) {
                return this.request({type: 'DELETE', url: t})
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.asset.Asset', {
            superClass: 'phina.util.EventDispatcher',
            serverError: !1,
            notFound: !1,
            loadError: !1,
            init: function(t) {
              this.superInit(), (this.loaded = !1)
            },
            load: function(t) {
              return (this.src = t), s.util.Flow(this._load.bind(this))
            },
            isLoaded: function() {
              return this.loaded
            },
            _load: function(t) {
              var e = this
              setTimeout(function() {
                ;(e.loaded = !0), t()
              }, 100)
            },
            loadDummy: function() {}
          })
        }),
        s.namespace(function() {
          s.define('phina.asset.AssetManager', {
            _static: {
              assets: {image: {}, sound: {}, spritesheet: {}},
              get: function(t, e) {
                return this.assets[t] && this.assets[t][e]
              },
              set: function(t, e, i) {
                this.assets[t] || (this.assets[t] = {}), (this.assets[t][e] = i)
              },
              contains: function(t, e) {}
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.asset.AssetLoader', {
            superClass: 'phina.util.EventDispatcher',
            init: function(t) {
              this.superInit(),
                (t = (t || {}).$safe({cache: !0})),
                (this.assets = {}),
                (this.cache = t.cache)
            },
            load: function(t) {
              var e = this,
                i = [],
                n = 0,
                r = 0
              return (
                t.forIn(function(t, e) {
                  r += Object.keys(e).length
                }),
                t.forIn(function(t, o) {
                  o.forIn(function(o, a) {
                    var h = (0, s.asset.AssetLoader.assetLoadFunctions[t])(o, a)
                    h.then(function(i) {
                      e.cache && s.asset.AssetManager.set(t, o, i),
                        e.flare('progress', {
                          key: o,
                          asset: i,
                          progress: ++n / r
                        })
                    }),
                      i.push(h)
                  })
                }),
                e.cache &&
                  e.on('progress', function(e) {
                    e.progress >= 1 &&
                      t.forIn(function(t, e) {
                        e.forIn(function(e, i) {
                          var n = s.asset.AssetManager.get(t, e)
                          if (n.loadError) {
                            var r = s.asset.AssetManager.get(t, 'dummy')
                            r
                              ? (r.loadError &&
                                  (r.loadDummy(), (r.loadError = !1)),
                                s.asset.AssetManager.set(t, e, r))
                              : n.loadDummy()
                          }
                        })
                      })
                  }),
                s.util.Flow.all(i).then(function(t) {
                  e.flare('load')
                })
              )
            },
            _static: {
              assetLoadFunctions: {
                image: function(t, e) {
                  return s.asset.Texture().load(e)
                },
                sound: function(t, e) {
                  return s.asset.Sound().load(e)
                },
                spritesheet: function(t, e) {
                  return s.asset.SpriteSheet().load(e)
                },
                script: function(t, e) {
                  return s.asset.Script().load(e)
                },
                font: function(t, e) {
                  var i = s.asset.Font()
                  return i.setFontName(t), i.load(e)
                },
                json: function(t, e) {
                  return s.asset.File().load({path: e, dataType: 'json'})
                },
                xml: function(t, e) {
                  return s.asset.File().load({path: e, dataType: 'xml'})
                },
                text: function(t, e) {
                  return s.asset.File().load(e)
                }
              },
              register: function(t, e) {
                return (this.assetLoadFunctions[t] = e), this
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.asset.File', {
            superClass: 'phina.asset.Asset',
            init: function() {
              this.superInit()
            },
            _load: function(t) {
              var e = {}
              'string' == typeof this.src
                ? e.$extend({path: this.src})
                : 'object' == typeof this.src && e.$extend(this.src),
                e.$safe({path: '', dataType: 'text'})
              var i = this,
                n = new XMLHttpRequest()
              n.open('GET', e.path),
                (n.onreadystatechange = function() {
                  if (
                    4 === n.readyState &&
                    -1 !== [200, 201, 0].indexOf(n.status)
                  ) {
                    var s = n.responseText
                    'json' === e.dataType
                      ? (s = JSON.parse(s))
                      : 'xml' === e.dataType &&
                        (s = new DOMParser().parseFromString(s, 'text/xml')),
                      (i.dataType = e.dataType),
                      (i.data = s),
                      t(i)
                  }
                }),
                n.send(null)
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.asset.Script', {
            superClass: 'phina.asset.Asset',
            init: function() {
              this.superInit()
            },
            _load: function(t) {
              var e = this
              ;(this.domElement = document.createElement('script')),
                (this.domElement.src = this.src),
                (this.domElement.onload = function() {
                  t(e)
                }.bind(this)),
                document.body.appendChild(this.domElement)
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.asset.Texture', {
            superClass: 'phina.asset.Asset',
            init: function() {
              this.superInit()
            },
            _load: function(t) {
              ;(this.domElement = new Image()),
                !('file:' == location.protocol) && /^data:/.test(this.src)
              var e = this
              ;(this.domElement.onload = function(i) {
                ;(e.loaded = !0), t(e)
              }),
                (this.domElement.onerror = function(t) {
                  console.error('[phina.js] not found `{0}`!'.format(this.src))
                  var i = e.src
                    .split('/')
                    .last.replace('.png', '')
                    .split('?')
                    .first.split('#').first
                  ;(t.target.onerror = null),
                    (t.target.src =
                      'http://dummyimage.com/128x128/444444/eeeeee&text=' + i)
                }),
                (this.domElement.src = this.src)
            },
            clone: function() {
              var t = this.domElement,
                e = s.graphics.Canvas().setSize(t.width, t.height),
                i = s.asset.Texture()
              return (
                e.context.drawImage(t, 0, 0), (i.domElement = e.domElement), i
              )
            },
            transmit: function(t) {
              var e = this.domElement,
                i = s.graphics.Canvas().setSize(e.width, e.height)
              i.context.drawImage(e, 0, 0)
              var n = i.context.getImageData(0, 0, i.width, i.height),
                r = n.data,
                o = void 0 !== t ? t.r : r[0],
                a = void 0 !== t ? t.g : r[1],
                h = void 0 !== t ? t.b : r[2]
              ;(3).step(r.length, 4, function(t) {
                r[t - 3] === o && r[t - 2] === a && r[t - 1] === h && (r[t] = 0)
              }),
                i.context.putImageData(n, 0, 0),
                (this.domElement = i.domElement)
            },
            filter: function(t) {
              if (!t) return this
              Array.isArray(t) || (t = [t])
              var e = this.domElement,
                i = e.width,
                n = e.height,
                r = s.graphics.Canvas().setSize(i, n),
                o = null
              return (
                r.context.drawImage(e, 0, 0),
                (o = r.context.getImageData(0, 0, i, n)),
                t.forEach(function(t) {
                  'function' == typeof t &&
                    n.times(function(e) {
                      i.times(function(n) {
                        var s = 4 * (e * i + n),
                          r = o.data.slice(s, s + 4)
                        t(r, s, n, e, o)
                      })
                    })
                }),
                r.context.putImageData(o, 0, 0),
                (this.domElement = r.domElement),
                this
              )
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.asset.Sound', {
            superClass: 'phina.asset.Asset',
            _loop: !1,
            _loopStart: 0,
            _loopEnd: 0,
            _playbackRate: 1,
            init: function() {
              this.superInit(),
                (this.context = s.asset.Sound.getAudioContext()),
                (this.gainNode = this.context.createGain())
            },
            play: function(t, e, i) {
              ;(t = t ? t + this.context.currentTime : 0),
                (e = e || 0),
                this.source
              var n = (this.source = this.context.createBufferSource())
              n.buffer = this.buffer
              return (
                (n.loop = this._loop),
                (n.loopStart = this._loopStart),
                (n.loopEnd = this._loopEnd),
                (n.playbackRate.value = this._playbackRate),
                n.connect(this.gainNode),
                this.gainNode.connect(s.asset.Sound.getMasterGain()),
                void 0 !== i ? n.start(t, e, i) : n.start(t, e),
                n.addEventListener(
                  'ended',
                  function() {
                    this.flare('ended')
                  }.bind(this)
                ),
                this
              )
            },
            stop: function() {
              return (
                this.source &&
                  (this.source.stop && this.source.stop(0),
                  (this.source = null),
                  this.flare('stop')),
                this
              )
            },
            pause: function() {
              return (
                (this.source.playbackRate.value = 0), this.flare('pause'), this
              )
            },
            resume: function() {
              return (
                (this.source.playbackRate.value = this._playbackRate),
                this.flare('resume'),
                this
              )
            },
            _oscillator: function(t) {
              var e = this.context,
                i = e.createOscillator()
              ;(i.type = t || 'sine'),
                (this.source = i),
                this.source.connect(e.destination)
            },
            loadFromBuffer: function(t) {
              var e = this.context
              if (!t)
                for (
                  var i = (t = e.createBuffer(1, 44100, 44100)).getChannelData(
                      0
                    ),
                    n = 0;
                  n < i.length;
                  n++
                )
                  i[n] = Math.sin((n / 100) * Math.PI)
              this.buffer = t
            },
            setLoop: function(t) {
              return (this.loop = t), this
            },
            setLoopStart: function(t) {
              return (this.loopStart = t), this
            },
            setLoopEnd: function(t) {
              return (this.loopEnd = t), this
            },
            setPlaybackRate: function(t) {
              return (this.playbackRate = t), this
            },
            _load: function(t) {
              ;/^data:/.test(this.src)
                ? this._loadFromURIScheme(t)
                : this._loadFromFile(t)
            },
            _loadFromFile: function(t) {
              var e = this,
                i = new XMLHttpRequest()
              i.open('GET', this.src),
                (i.onreadystatechange = function() {
                  if (4 === i.readyState)
                    if (-1 !== [200, 201, 0].indexOf(i.status)) {
                      var n = i.response
                      e.context.decodeAudioData(
                        n,
                        function(i) {
                          e.loadFromBuffer(i), t(e)
                        },
                        function() {
                          console.warn(
                            '音声ファイルのデコードに失敗しました。(' +
                              e.src +
                              ')'
                          ),
                            t(e),
                            e.flare('decodeerror')
                        }
                      )
                    } else
                      404 === i.status
                        ? ((e.loadError = !0),
                          (e.notFound = !0),
                          t(e),
                          e.flare('loaderror'),
                          e.flare('notfound'))
                        : ((e.loadError = !0),
                          (e.serverError = !0),
                          t(e),
                          e.flare('loaderror'),
                          e.flare('servererror'))
                }),
                (i.responseType = 'arraybuffer'),
                i.send(null)
            },
            _loadFromURIScheme: function(t) {
              var e = ''
              e =
                this.src.split(',')[0].indexOf('base64') >= 0
                  ? atob(this.src.split(',')[1])
                  : unescape(this.src.split(',')[1])
              for (
                var i = this, n = e.length, s = new Uint8Array(n), r = 0;
                r < n;
                ++r
              )
                s[r] = e.charCodeAt(r)
              this.context.decodeAudioData(
                s.buffer,
                function(e) {
                  i.loadFromBuffer(e), t(i)
                },
                function() {
                  console.warn(
                    '音声ファイルのデコードに失敗しました。(' + i.src + ')'
                  ),
                    (i.loaded = !0),
                    t(i)
                }
              )
            },
            loadDummy: function() {
              this.loadFromBuffer()
            },
            _accessor: {
              volume: {
                get: function() {
                  return this.gainNode.gain.value
                },
                set: function(t) {
                  this.gainNode.gain.value = t
                }
              },
              loop: {
                get: function() {
                  return this._loop
                },
                set: function(t) {
                  ;(this._loop = t), this.source && (this.source._loop = t)
                }
              },
              loopStart: {
                get: function() {
                  return this._loopStart
                },
                set: function(t) {
                  ;(this._loopStart = t),
                    this.source && (this.source._loopStart = t)
                }
              },
              loopEnd: {
                get: function() {
                  return this._loopEnd
                },
                set: function(t) {
                  ;(this._loopEnd = t),
                    this.source && (this.source._loopEnd = t)
                }
              },
              playbackRate: {
                get: function() {
                  return this._playbackRate
                },
                set: function(t) {
                  ;(this._playbackRate = t),
                    this.source &&
                      0 !== this.source.playbackRate.value &&
                      (this.source.playbackRate.value = t)
                }
              }
            },
            _defined: function() {
              this.accessor('volume', {
                get: function() {
                  return this.getMasterGain().gain.value
                },
                set: function(t) {
                  this.getMasterGain().gain.value = t
                }
              })
            },
            _static: {
              getMasterGain: function() {
                if (!this._masterGain) {
                  var t = this.getAudioContext()
                  ;(this._masterGain = t.createGain()),
                    this._masterGain.connect(t.destination)
                }
                return this._masterGain
              },
              getAudioContext: function() {
                if (!s.util.Support.webAudio) return null
                if (this.context) return this.context
                var t = s.global,
                  e = null
                return (
                  t.AudioContext
                    ? (e = new AudioContext())
                    : t.webkitAudioContext
                    ? (e = new webkitAudioContext())
                    : t.mozAudioContext && (e = new mozAudioContext()),
                  (this.context = e),
                  e
                )
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.asset.SoundManager', {
            _static: {
              volume: 0.8,
              musicVolume: 0.8,
              muteFlag: !1,
              currentMusic: null,
              play: function(t, e, i, n) {
                var r = s.asset.AssetManager.get('sound', t)
                return (r.volume = this.getVolume()), r.play(e, i, n), r
              },
              stop: function() {},
              pause: function() {},
              fade: function() {},
              setVolume: function(t) {
                this.volume = t
              },
              getVolume: function() {
                return this.volume
              },
              mute: function() {
                return (
                  (this.muteFlag = !0),
                  this.currentMusic && (this.currentMusic.volume = 0),
                  this
                )
              },
              unmute: function() {
                return (
                  (this.muteFlag = !1),
                  this.currentMusic &&
                    (this.currentMusic.volume = this.getVolumeMusic()),
                  this
                )
              },
              isMute: function() {
                return this.muteFlag
              },
              playMusic: function(t, e, i, n, r, o) {
                ;(i = void 0 === i || i), this.currentMusic && this.stopMusic(e)
                var a = s.asset.AssetManager.get('sound', t)
                if ((a.setLoop(i), a.play(n, r, o), e > 0)) {
                  var h = 0,
                    u = e / 32,
                    c = this.getVolumeMusic()
                  a.volume = 0
                  var l = setInterval(function() {
                    var t = (h += 1) / 32
                    return (
                      (a.volume = t * c), !(t >= 1) || (clearInterval(l), !1)
                    )
                  }, u)
                } else a.volume = this.getVolumeMusic()
                return (this.currentMusic = a), this.currentMusic
              },
              stopMusic: function(t) {
                if (this.currentMusic) {
                  var e = this.currentMusic
                  if (((this.currentMusic = null), t > 0)) {
                    var i = 0,
                      n = t / 32,
                      s = this.getVolumeMusic()
                    e.volume = 0
                    var r = setInterval(function() {
                      var t = (i += 1) / 32
                      return (
                        (e.volume = s * (1 - t)),
                        !(t >= 1) || (e.stop(), clearInterval(r), !1)
                      )
                    }, n)
                  } else e.stop()
                }
              },
              pauseMusic: function() {
                this.currentMusic && this.currentMusic.pause()
              },
              resumeMusic: function() {
                this.currentMusic && this.currentMusic.resume()
              },
              setVolumeMusic: function(t) {
                return (
                  (this.musicVolume = t),
                  this.currentMusic && (this.currentMusic.volume = t),
                  this
                )
              },
              getVolumeMusic: function() {
                return this.musicVolume
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.asset.SpriteSheet', {
            superClass: 'phina.asset.Asset',
            init: function() {
              this.superInit()
            },
            setup: function(t) {
              return (
                this._setupFrame(t.frame), this._setupAnim(t.animations), this
              )
            },
            _load: function(t) {
              var e = this
              if ('string' == typeof this.src) {
                var i = new XMLHttpRequest()
                i.open('GET', this.src),
                  (i.onreadystatechange = function() {
                    if (
                      4 === i.readyState &&
                      -1 !== [200, 201, 0].indexOf(i.status)
                    ) {
                      var n = i.responseText,
                        s = JSON.parse(n)
                      e.setup(s), t(e)
                    }
                  }),
                  i.send(null)
              } else this.setup(this.src), t(e)
            },
            _setupFrame: function(t) {
              var e = (this.frames = []),
                i = t.width,
                n = t.height,
                s = t.rows * t.cols
              ;(this.frame = s),
                s.times(function(s) {
                  var r = s % t.cols,
                    o = (s / t.cols) | 0
                  e.push({x: r * i, y: o * n, width: i, height: n})
                })
            },
            _setupAnim: function(t) {
              ;(this.animations = {}),
                (this.animations.default = {
                  frames: [].range(0, this.frame),
                  next: 'default',
                  frequency: 1
                }),
                t.forIn(function(t, e) {
                  var i = e
                  this.animations[t] =
                    i instanceof Array
                      ? {
                          frames: [].range(i[0], i[1]),
                          next: i[2],
                          frequency: i[3] || 1
                        }
                      : {
                          frames: i.frames,
                          next: i.next,
                          frequency: i.frequency || 1
                        }
                }, this)
            },
            getFrame: function(t) {
              return this.frames[t]
            },
            getAnimation: function(t) {
              return (t = void 0 !== t ? t : 'default'), this.animations[t]
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.asset.Font', {
            superClass: 'phina.asset.Asset',
            init: function() {
              this.superInit(), (this.fontName = null)
            },
            load: function(t) {
              this.src = t
              var e = /(.*)(?:\.([^.]+$))/,
                i = this.fontName || t.match(e)[1].split('/').last,
                n = 'unknown'
              switch (t.match(e)[2]) {
                case 'ttf':
                  n = 'truetype'
                  break
                case 'otf':
                  n = 'opentype'
                  break
                case 'woff':
                  n = 'woff'
                  break
                case 'woff2':
                  n = 'woff2'
                  break
                default:
                  console.warn(
                    'サポートしていないフォント形式です。(' + t + ')'
                  )
              }
              if (((this.format = n), (this.fontName = i), 'unknown' !== n)) {
                var r = "@font-face { font-family: '{0}'; src: url({1}) format('{2}'); }".format(
                    i,
                    t,
                    n
                  ),
                  o = document.querySelector('head'),
                  a = document.createElement('style')
                a.innerText ? (a.innerText = r) : (a.textContent = r),
                  o.appendChild(a)
              }
              return s.util.Flow(this._load.bind(this))
            },
            _load: function(t) {
              'unknown' !== this.format
                ? this._checkLoaded(
                    this.fontName,
                    function() {
                      ;(this.loaded = !0), t(this)
                    }.bind(this)
                  )
                : ((this.loaded = !0), t(this))
            },
            _checkLoaded: function(t, e) {
              var i = s.graphics.Canvas(),
                n = i.context.font.split(' ')[1]
              i.context.font = '40px ' + n
              var r =
                '1234567890-^\\qwertyuiop@[asdfghjkl;:]zxcvbnm,./!"#$%&\'()=~|QWERTYUIOP`{ASDFGHJKL+*}ZXCVBNM<>?_１２３４５６７８９０－＾￥ｑｗｅｒｔｙｕｉｏｐａｓｄｆｇｈｊｋｌｚｘｃｖｂｎｍ，．あいうかさたなをん時は金なり'
              r += String.fromCharCode('0xf04b')
              var o = i.context.measureText(r).width
              i.context.font = '40px ' + t + ', ' + n
              var a = 30,
                h = function() {
                  i.context.measureText(r).width !== o
                    ? setTimeout(function() {
                        e && e()
                      }, 100)
                    : --a > 0
                    ? setTimeout(h, 100)
                    : (e && e(), console.warn('timeout font loading'))
                }
              h()
            },
            setFontName: function(t) {
              return this.loaded
                ? (console.warn(
                    'フォント名はLoad前にのみ設定が出来ます(' + t + ')'
                  ),
                  this)
                : ((this.fontName = t), this)
            },
            getFontName: function() {
              return this.fontName
            }
          })
        }),
        s.define('phina.input.Input', {
          superClass: 'phina.util.EventDispatcher',
          domElement: null,
          init: function(t) {
            this.superInit(),
              (this.domElement = t || window.document),
              (this.position = s.geom.Vector2(0, 0)),
              (this.startPosition = s.geom.Vector2(0, 0)),
              (this.deltaPosition = s.geom.Vector2(0, 0)),
              (this.prevPosition = s.geom.Vector2(0, 0)),
              (this._tempPosition = s.geom.Vector2(0, 0)),
              (this.maxCacheNum = s.input.Input.defaults.maxCacheNum),
              (this.minDistance = s.input.Input.defaults.minDistance),
              (this.maxDistance = s.input.Input.defaults.maxDistance),
              (this.cachePositions = []),
              (this.flickVelocity = s.geom.Vector2(0, 0)),
              (this.flags = 0)
          },
          update: function() {
            ;(this.last = this.now),
              (this.now = this.flags),
              (this.start = (this.now ^ this.last) & this.now),
              (this.end = (this.now ^ this.last) & this.last),
              (this.deltaPosition.x = this._tempPosition.x - this.position.x),
              (this.deltaPosition.y = this._tempPosition.y - this.position.y),
              0 === this.deltaPosition.x && 0 === this.deltaPosition.y
                ? (this._moveFlag = !1)
                : (this._moveFlag = !0),
              this.start &&
                this.startPosition.set(this.position.x, this.position.y),
              this.prevPosition.set(this.position.x, this.position.y),
              this.position.set(this._tempPosition.x, this._tempPosition.y),
              this.cachePositions.length > this.maxCacheNum &&
                this.cachePositions.shift(),
              this.cachePositions.push(this.position.clone())
          },
          _start: function(t, e, i) {
            ;(i = void 0 !== i ? i : 1),
              this._move(t, e),
              (this.flags |= i),
              (t = this._tempPosition.x),
              (e = this._tempPosition.y),
              this.position.set(t, e),
              this.prevPosition.set(t, e),
              this.flickVelocity.set(0, 0),
              this.cachePositions.clear()
          },
          _end: function(t) {
            if (
              ((t = void 0 !== t ? t : 1),
              (this.flags &= ~t),
              !(this.cachePositions.length < 2))
            ) {
              var e = this.cachePositions.first,
                i = this.cachePositions.last,
                n = s.geom.Vector2.sub(i, e),
                r = n.length()
              if (r > this.minDistance) {
                var o = r.clamp(this.minDistance, this.maxDistance)
                n.div(r).mul(o), this.flickVelocity.set(n.x, n.y)
              }
              this.cachePositions.clear()
            }
          },
          _move: function(t, e) {
            ;(this._tempPosition.x = t), (this._tempPosition.y = e)
            var i = this.domElement,
              n = i.getBoundingClientRect()
            n.width && (this._tempPosition.x *= i.width / n.width),
              n.height && (this._tempPosition.y *= i.height / n.height)
          },
          _accessor: {
            x: {
              get: function() {
                return this.position.x
              },
              set: function(t) {
                this.position.x = t
              }
            },
            y: {
              get: function() {
                return this.position.y
              },
              set: function(t) {
                this.position.y = t
              }
            },
            dx: {
              get: function() {
                return this.deltaPosition.x
              },
              set: function(t) {
                this.deltaPosition.x = t
              }
            },
            dy: {
              get: function() {
                return this.deltaPosition.y
              },
              set: function(t) {
                this.deltaPosition.y = t
              }
            },
            fx: {
              get: function() {
                return this.flickVelocity.x
              },
              set: function(t) {
                this.flickVelocity.x = t
              }
            },
            fy: {
              get: function() {
                return this.flickVelocity.y
              },
              set: function(t) {
                this.flickVelocity.y = t
              }
            }
          },
          _static: {
            defaults: {maxCacheNum: 3, minDistance: 10, maxDistance: 100}
          }
        }),
        (function() {
          s.define('phina.input.Mouse', {
            superClass: 'phina.input.Input',
            init: function(t) {
              this.superInit(t), (this.id = 0)
              var e = this
              this.domElement.addEventListener('mousedown', function(t) {
                e._start(t.pointX, t.pointY, 1 << t.button)
              }),
                this.domElement.addEventListener('mouseup', function(t) {
                  e._end(1 << t.button)
                }),
                this.domElement.addEventListener('mousemove', function(t) {
                  e._move(t.pointX, t.pointY)
                }),
                this.domElement.addEventListener('mouseout', function(t) {
                  e._end(1)
                })
            },
            getButton: function(e) {
              return 'string' == typeof e && (e = t[e]), 0 != (this.now & e)
            },
            getButtonDown: function(e) {
              return 'string' == typeof e && (e = t[e]), 0 != (this.start & e)
            },
            getButtonUp: function(e) {
              return 'string' == typeof e && (e = t[e]), 0 != (this.end & e)
            },
            _static: {BUTTON_LEFT: 1, BUTTON_MIDDLE: 2, BUTTON_RIGHT: 4}
          })
          var t = {
            left: s.input.Mouse.BUTTON_LEFT,
            middle: s.input.Mouse.BUTTON_MIDDLE,
            right: s.input.Mouse.BUTTON_RIGHT
          }
          ;(s.input.Mouse.prototype.getPointing = function() {
            return this.getButton('left')
          }),
            (s.input.Mouse.prototype.getPointingStart = function() {
              return this.getButtonDown('left')
            }),
            (s.input.Mouse.prototype.getPointingEnd = function() {
              return this.getButtonUp('left')
            })
        })(),
        s.define('phina.input.Touch', {
          superClass: 'phina.input.Input',
          init: function(t, e) {
            if ((this.superInit(t), (this.id = null), !0 !== e)) {
              var i = this
              this.domElement.addEventListener('touchstart', function(t) {
                i._start(t.pointX, t.pointY, !0)
              }),
                this.domElement.addEventListener('touchend', function(t) {
                  i._end()
                }),
                this.domElement.addEventListener('touchmove', function(t) {
                  i._move(t.pointX, t.pointY)
                })
            }
          },
          getTouch: function() {
            return 0 != this.now
          },
          getTouchStart: function() {
            return 0 != this.start
          },
          getTouchEnd: function() {
            return 0 != this.end
          }
        }),
        (s.input.Touch.prototype.getPointing =
          s.input.Touch.prototype.getTouch),
        (s.input.Touch.prototype.getPointingStart =
          s.input.Touch.prototype.getTouchStart),
        (s.input.Touch.prototype.getPointingEnd =
          s.input.Touch.prototype.getTouchEnd),
        s.define('phina.input.TouchList', {
          domElement: null,
          touchMap: null,
          touches: null,
          _id: null,
          init: function(t) {
            ;(this.domElement = t), (this.touches = [])
            var e = (this.touchMap = {})
            this._id = new Uint32Array(1)
            var i = this,
              n = Array.prototype.forEach
            this.domElement.addEventListener('touchstart', function(t) {
              n.call(t.changedTouches, function(t) {
                var n = i.getEmpty()
                ;(e[t.identifier] = n), n._start(t.pointX, t.pointY)
              })
            }),
              this.domElement.addEventListener('touchend', function(t) {
                n.call(t.changedTouches, function(t) {
                  var i = t.identifier
                  e[i]._end(), delete e[i]
                })
              }),
              this.domElement.addEventListener('touchmove', function(t) {
                n.call(t.changedTouches, function(t) {
                  e[t.identifier]._move(t.pointX, t.pointY)
                }),
                  t.stop()
              }),
              this.domElement.addEventListener('touchcancel', function(t) {
                console.warn('この端末での同時タッチ数の制限を超えました。'),
                  n.call(t.changedTouches, function(t) {
                    var i = t.identifier
                    e[i]._end(), delete e[i]
                  }),
                  t.stop()
              })
          },
          getEmpty: function() {
            var t = s.input.Touch(this.domElement, !0)
            return (t.id = this.id), this.touches.push(t), t
          },
          getTouch: function(t) {
            return this.touchMap[t]
          },
          removeTouch: function(t) {
            var e = this.touches.indexOf(t)
            this.touches.splice(e, 1)
          },
          update: function() {
            this.touches.forEach(function(t) {
              t.released
                ? ((t.released = !1), this.removeTouch(t))
                : (t.update(), 0 === t.flags && (t.released = !0))
            }, this)
          },
          _accessor: {
            id: {
              get: function() {
                return this._id[0]++
              }
            }
          }
        }),
        s.namespace(function() {
          s.define('phina.input.Keyboard', {
            superClass: 'phina.input.Input',
            init: function(t) {
              this.superInit(t),
                (this.key = {}),
                (this.press = {}),
                (this.down = {}),
                (this.up = {}),
                (this.last = {}),
                (this._keydown = null),
                (this._keyup = null),
                (this._keypress = null)
              var e = this
              this.domElement.addEventListener('keydown', function(t) {
                ;(e.key[t.keyCode] = !0), (e._keydown = t.keyCode)
              }),
                this.domElement.addEventListener('keyup', function(t) {
                  ;(e.key[t.keyCode] = !1), (e._keyup = t.keyCode)
                }),
                this.domElement.addEventListener('keypress', function(t) {
                  e._keypress = t.keyCode
                })
            },
            update: function() {
              for (var t in this.key)
                (this.last[t] = this.press[t]),
                  (this.press[t] = this.key[t]),
                  (this.down[t] =
                    (this.press[t] ^ this.last[t]) & this.press[t]),
                  (this.up[t] = (this.press[t] ^ this.last[t]) & this.last[t])
              return (
                this._keydown &&
                  (this.flare('keydown', {keyCode: this._keydown}),
                  (this._keydown = null)),
                this._keyup &&
                  (this.flare('keyup', {keyCode: this._keyup}),
                  (this._keyup = null)),
                this._keypress &&
                  (this.flare('keypress', {keyCode: this._keypress}),
                  (this._keypress = null)),
                this
              )
            },
            getKey: function(t) {
              return (
                'string' == typeof t && (t = s.input.Keyboard.KEY_CODE[t]),
                !0 == !!this.press[t]
              )
            },
            getKeyDown: function(t) {
              return (
                'string' == typeof t && (t = s.input.Keyboard.KEY_CODE[t]),
                1 == this.down[t]
              )
            },
            getKeyUp: function(t) {
              return (
                'string' == typeof t && (t = s.input.Keyboard.KEY_CODE[t]),
                1 == this.up[t]
              )
            },
            getKeyAngle: function() {
              var t = null,
                e =
                  (this.getKey('left') << 3) |
                  (this.getKey('up') << 2) |
                  (this.getKey('right') << 1) |
                  this.getKey('down')
              return (
                0 !== e &&
                  s.input.Keyboard.ARROW_BIT_TO_ANGLE_TABLE.hasOwnProperty(e) &&
                  (t = s.input.Keyboard.ARROW_BIT_TO_ANGLE_TABLE[e]),
                t
              )
            },
            getKeyDirection: function() {
              var t = s.geom.Vector2(0, 0)
              return (
                this.getKey('left')
                  ? (t.x = -1)
                  : this.getKey('right') && (t.x = 1),
                this.getKey('up')
                  ? (t.y = -1)
                  : this.getKey('down') && (t.y = 1),
                t.x && t.y && t.div(Math.SQRT2),
                t
              )
            },
            setKey: function(t, e) {
              return (
                'string' == typeof t && (t = s.input.Keyboard.KEY_CODE[t]),
                (this.key[t] = e),
                this
              )
            },
            clearKey: function() {
              return (this.key = {}), this
            },
            _static: {
              ARROW_BIT_TO_ANGLE_TABLE: {
                1: 270,
                2: 0,
                4: 90,
                8: 180,
                6: 45,
                3: 315,
                12: 135,
                9: 225,
                14: 90,
                13: 180,
                11: 270,
                7: 0
              },
              KEY_CODE: {
                backspace: 8,
                tab: 9,
                enter: 13,
                return: 13,
                shift: 16,
                ctrl: 17,
                alt: 18,
                pause: 19,
                capslock: 20,
                escape: 27,
                pageup: 33,
                pagedown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                insert: 45,
                delete: 46,
                0: 48,
                1: 49,
                2: 50,
                3: 51,
                4: 52,
                5: 53,
                6: 54,
                7: 55,
                8: 56,
                9: 57,
                a: 65,
                A: 65,
                b: 66,
                B: 66,
                c: 67,
                C: 67,
                d: 68,
                D: 68,
                e: 69,
                E: 69,
                f: 70,
                F: 70,
                g: 71,
                G: 71,
                h: 72,
                H: 72,
                i: 73,
                I: 73,
                j: 74,
                J: 74,
                k: 75,
                K: 75,
                l: 76,
                L: 76,
                m: 77,
                M: 77,
                n: 78,
                N: 78,
                o: 79,
                O: 79,
                p: 80,
                P: 80,
                q: 81,
                Q: 81,
                r: 82,
                R: 82,
                s: 83,
                S: 83,
                t: 84,
                T: 84,
                u: 85,
                U: 85,
                v: 86,
                V: 86,
                w: 87,
                W: 87,
                x: 88,
                X: 88,
                y: 89,
                Y: 89,
                z: 90,
                Z: 90,
                numpad0: 96,
                numpad1: 97,
                numpad2: 98,
                numpad3: 99,
                numpad4: 100,
                numpad5: 101,
                numpad6: 102,
                numpad7: 103,
                numpad8: 104,
                numpad9: 105,
                multiply: 106,
                add: 107,
                subtract: 109,
                decimalpoint: 110,
                divide: 111,
                f1: 112,
                f2: 113,
                f3: 114,
                f4: 115,
                f5: 116,
                f6: 117,
                f7: 118,
                f8: 119,
                f9: 120,
                f10: 121,
                f11: 122,
                f12: 123,
                numlock: 144,
                scrolllock: 145,
                semicolon: 186,
                equalsign: 187,
                comma: 188,
                dash: 189,
                period: 190,
                'forward slash': 191,
                '/': 191,
                'grave accent': 192,
                'open bracket': 219,
                'back slash': 220,
                'close bracket': 221,
                'single quote': 222,
                space: 32
              }
            }
          })
        }),
        s.namespace(function() {
          var t
          s.define('phina.input.GamepadManager', {
            superClass: 'phina.util.EventDispatcher',
            gamepads: null,
            _created: null,
            _rawgamepads: null,
            init: function() {
              this.superInit(),
                (this.gamepads = {}),
                (this._created = []),
                (this._rawgamepads = []),
                (this._prevTimestamps = {}),
                (this._getGamepads = null)
              var t = s.global.navigator
              t && t.getGamepads
                ? (this._getGamepads = t.getGamepads.bind(t))
                : t && t.webkitGetGamepads
                ? (this._getGamepads = t.webkitGetGamepads.bind(t))
                : (this._getGamepads = function() {}),
                s.global.addEventListener(
                  'gamepadconnected',
                  function(t) {
                    var e = this.get(t.gamepad.index)
                    ;(e.connected = !0), this.flare('connected', {gamepad: e})
                  }.bind(this)
                ),
                s.global.addEventListener(
                  'gamepaddisconnected',
                  function(t) {
                    var e = this.get(t.gamepad.index)
                    ;(e.connected = !1),
                      this.flare('disconnected', {gamepad: e})
                  }.bind(this)
                )
            },
            update: function() {
              this._poll()
              for (var t = 0, e = this._created.length; t < e; t++) {
                var i = this._created[t],
                  n = this._rawgamepads[i]
                n &&
                  (n.timestamp && n.timestamp === this._prevTimestamps[t]
                    ? this.gamepads[i]._updateStateEmpty()
                    : ((this._prevTimestamps[t] = n.timestamp),
                      this.gamepads[i]._updateState(n)))
              }
            },
            get: function(t) {
              return (
                (t = t || 0),
                this.gamepads[t] ||
                  (this._created.push(t),
                  (this.gamepads[t] = s.input.Gamepad(t))),
                this.gamepads[t]
              )
            },
            dispose: function(t) {
              if (this._created.contains(t)) {
                var e = this.get(t)
                delete this.gamepad[e],
                  this._created.erase(t),
                  (e.connected = !1)
              }
            },
            isConnected: function(t) {
              return (
                (t = t || 0),
                this._rawgamepads[t] && this._rawgamepads[t].connected
              )
            },
            _poll: function() {
              var t = this._getGamepads()
              if (t) {
                this._rawgamepads.clear()
                for (var e = 0, i = t.length; e < i; e++)
                  t[e] && this._rawgamepads.push(t[e])
              }
            },
            _static: {
              isAvailable:
                ((t = s.global.navigator),
                !(!t || (!t.getGamepads && !t.webkitGetGamepads)))
            }
          }),
            s.define('phina.input.Gamepad', {
              index: null,
              buttons: null,
              sticks: null,
              id: null,
              connected: !1,
              mapping: null,
              timestamp: null,
              init: function(t) {
                ;(this.index = t || 0),
                  (this.buttons = Array.range(0, 16).map(function() {
                    return {value: 0, pressed: !1, last: !1, down: !1, up: !1}
                  })),
                  (this.sticks = Array.range(0, 2).map(function() {
                    return s.geom.Vector2(0, 0)
                  }))
              },
              getKey: function(t) {
                return (
                  'string' == typeof t && (t = s.input.Gamepad.BUTTON_CODE[t]),
                  !!this.buttons[t] && this.buttons[t].pressed
                )
              },
              getKeyDown: function(t) {
                return (
                  'string' == typeof t && (t = s.input.Gamepad.BUTTON_CODE[t]),
                  !!this.buttons[t] && this.buttons[t].down
                )
              },
              getKeyUp: function(t) {
                return (
                  'string' == typeof t && (t = s.input.Gamepad.BUTTON_CODE[t]),
                  !!this.buttons[t] && this.buttons[t].up
                )
              },
              getKeyAngle: function() {
                var t = null,
                  i =
                    (this.getKey('left') << 3) |
                    (this.getKey('up') << 2) |
                    (this.getKey('right') << 1) |
                    this.getKey('down')
                return 0 !== i && e.hasOwnProperty(i) && (t = e[i]), t
              },
              getKeyDirection: function() {
                var t = s.geom.Vector2(0, 0)
                return (
                  this.getKey('left')
                    ? (t.x = -1)
                    : this.getKey('right') && (t.x = 1),
                  this.getKey('up')
                    ? (t.y = -1)
                    : this.getKey('down') && (t.y = 1),
                  t.x && t.y && t.div(Math.SQRT2),
                  t
                )
              },
              getStickAngle: function(t) {
                t = t || 0
                var e = this.sticks[t]
                return e ? Math.atan2(-e.y, e.x) : null
              },
              getStickDirection: function(t) {
                return (
                  (t = t || 0),
                  this.sticks ? this.sticks[t].clone() : s.geom.Vector2(0, 0)
                )
              },
              _updateState: function(t) {
                ;(this.id = t.id),
                  (this.connected = t.connected),
                  (this.mapping = t.mapping),
                  (this.timestamp = t.timestamp)
                for (var e = 0, i = t.buttons.length; e < i; e++)
                  this._updateButton(t.buttons[e], e)
                for (var n = 0, s = t.axes.length; n < s; n += 2)
                  this._updateStick(t.axes[n + 0], n / 2, 'x'),
                    this._updateStick(t.axes[n + 1], n / 2, 'y')
              },
              _updateStateEmpty: function() {
                for (var t = 0, e = this.buttons.length; t < e; t++)
                  (this.buttons[t].down = !1), (this.buttons[t].up = !1)
              },
              _updateButton: function(t, e) {
                void 0 === this.buttons[e] &&
                  (this.buttons[e] = {
                    value: 0,
                    pressed: !1,
                    last: !1,
                    down: !1,
                    up: !1
                  })
                var i = this.buttons[e]
                ;(i.last = i.pressed),
                  'object' == typeof t
                    ? ((i.value = t.value), (i.pressed = t.pressed))
                    : ((i.value = t),
                      (i.pressed =
                        t > s.input.Gamepad.ANALOGUE_BUTTON_THRESHOLD)),
                  (i.down = (i.pressed ^ i.last) & i.pressed),
                  (i.up = (i.pressed ^ i.last) & i.last)
              },
              _updateStick: function(t, e, i) {
                void 0 === this.sticks[e] &&
                  (this.sticks[e] = s.geom.Vector2(0, 0)),
                  (this.sticks[e][i] = t)
              },
              _static: {
                isAvailable: (function() {
                  var t = s.global.navigator
                  return !!t && (!!t.getGamepads || !!t.webkitGetGamepads)
                })(),
                ANALOGUE_BUTTON_THRESHOLD: 0.5,
                BUTTON_CODE: {
                  a: 0,
                  b: 1,
                  x: 2,
                  y: 3,
                  l1: 4,
                  r1: 5,
                  l2: 6,
                  r2: 7,
                  select: 8,
                  start: 9,
                  l3: 10,
                  r3: 11,
                  up: 12,
                  down: 13,
                  left: 14,
                  right: 15,
                  special: 16,
                  A: 0,
                  B: 1,
                  X: 2,
                  Y: 3,
                  L1: 4,
                  R1: 5,
                  L2: 6,
                  R2: 7,
                  SELECT: 8,
                  START: 9,
                  L3: 10,
                  R3: 11,
                  UP: 12,
                  DOWN: 13,
                  LEFT: 14,
                  RIGHT: 15,
                  SPECIAL: 16
                }
              }
            })
          var e = {
            0: null,
            1: 270,
            2: 0,
            4: 90,
            8: 180,
            6: 45,
            3: 315,
            12: 135,
            9: 225,
            14: 90,
            13: 180,
            11: 270,
            7: 0
          }
        }),
        s.namespace(function() {
          s.define('phina.input.Accelerometer', {
            init: function() {
              var t = this
              ;(this.gravity = s.geom.Vector3(0, 0, 0)),
                (this.acceleration = s.geom.Vector3(0, 0, 0)),
                (this.rotation = s.geom.Vector3(0, 0, 0)),
                (this.orientation = s.geom.Vector3(0, 0, 0)),
                s.isMobile() &&
                  (s.global.addEventListener('devicemotion', function(e) {
                    var i = t.acceleration,
                      n = t.gravity,
                      s = t.rotation
                    e.acceleration &&
                      ((i.x = e.acceleration.x),
                      (i.y = e.acceleration.y),
                      (i.z = e.acceleration.z)),
                      e.accelerationIncludingGravity &&
                        ((n.x = e.accelerationIncludingGravity.x),
                        (n.y = e.accelerationIncludingGravity.y),
                        (n.z = e.accelerationIncludingGravity.z)),
                      e.rotationRate &&
                        ((s.x = s.beta = e.rotationRate.beta),
                        (s.y = s.gamma = e.rotationRate.gamma),
                        (s.z = s.alpha = e.rotationRate.alpha))
                  }),
                  s.global.addEventListener('deviceorientation', function(e) {
                    var i = t.orientation
                    ;(i.alpha = e.alpha), (i.beta = e.beta), (i.gamma = e.gamma)
                  }))
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.app.Updater', {
            init: function(t) {
              this.app = t
            },
            update: function(t) {
              this._updateElement(t)
            },
            _updateElement: function(t) {
              var e = this.app
              if (!1 !== t.awake) {
                t.has('enterframe') && t.flare('enterframe', {app: this.app}),
                  t.update && t.update(e)
                var i = t.children.length
                if (t.children.length > 0)
                  for (var n = t.children.slice(), s = 0; s < i; ++s)
                    this._updateElement(n[s])
              }
            },
            _checkPoint: function(t) {
              this.app.pointers.forEach(function(e) {
                null !== e.id && this.__checkPoint(t, e)
              }, this)
            },
            __checkPoint: function(t, e) {
              if (t.interactive) {
                var i = t._overFlags[e.id],
                  n = t.hitTest2(e.x, e.y)
                ;(t._overFlags[e.id] = n),
                  !i && n && t.flare('pointover', {pointer: e}),
                  i && !n && t.flare('pointout'),
                  n &&
                    e.getPointingStart() &&
                    ((t._touchFlags[e.id] = !0), t.flare('pointstart')),
                  t._touchFlags[e.id] &&
                    (t.flare('pointstay'), e._moveFlag && t.flare('pointmove')),
                  !0 === t._touchFlags[e.id] &&
                    e.getPointingEnd() &&
                    ((t._touchFlags[e.id] = !1),
                    t.flare('pointend'),
                    t._overFlags[e.id] &&
                      ((t._overFlags[e.id] = !1), t.flare('pointout')))
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.app.Interactive', {
            init: function(t) {
              ;(this.app = t),
                (this._enable = !0),
                (this.multiTouch = !0),
                (this.cursor = {normal: '', hover: 'pointer'}),
                (this._holds = []),
                this.app.on(
                  'changescene',
                  function() {
                    this._holds.clear()
                  }.bind(this)
                )
            },
            enable: function() {
              return (this._enable = !0), this
            },
            disable: function() {
              return (this._enable = !1), this
            },
            check: function(t) {
              this.app.domElement &&
                (this._holds.length > 0
                  ? (this.app.domElement.style.cursor = this.cursor.hover)
                  : (this.app.domElement.style.cursor = this.cursor.normal)),
                this._enable && this.app.pointers && this._checkElement(t)
            },
            _checkElement: function(t) {
              this.app
              if (!1 !== t.awake) {
                var e = t.children.length
                if (t.children.length > 0)
                  for (var i = t.children.slice(), n = 0; n < e; ++n)
                    this._checkElement(i[n])
                this._checkPoint(t)
              }
            },
            _checkPoint: function(t) {
              this.multiTouch
                ? this.app.pointers.forEach(function(e) {
                    null !== e.id && this.__checkPoint(t, e)
                  }, this)
                : this.__checkPoint(t, this.app.pointer)
            },
            __checkPoint: function(t, e) {
              if (t.interactive) {
                var i = t._overFlags[e.id],
                  n = t.hitTest(e.x, e.y)
                t._overFlags[e.id] = n
                var r = {pointer: e, interactive: this, over: n}
                !i &&
                  n &&
                  (t.flare('pointover', r),
                  t.boundingType &&
                    'none' !== t.boundingType &&
                    this._holds.push(t)),
                  i && !n && (t.flare('pointout', r), this._holds.erase(t)),
                  n &&
                    e.getPointingStart() &&
                    ((t._touchFlags[e.id] = !0),
                    t.flare('pointstart', r),
                    (t._clicked = !0)),
                  t._touchFlags[e.id] &&
                    (t.flare('pointstay', r),
                    e._moveFlag && t.flare('pointmove', r)),
                  !0 === t._touchFlags[e.id] &&
                    e.getPointingEnd() &&
                    ((t._touchFlags[e.id] = !1),
                    t.flare('pointend', r),
                    s.isMobile() &&
                      t._overFlags[e.id] &&
                      ((t._overFlags[e.id] = !1),
                      t.flare('pointout', r),
                      this._holds.erase(t)))
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.app.BaseApp', {
            superClass: 'phina.util.EventDispatcher',
            awake: null,
            fps: null,
            frame: null,
            init: function() {
              this.superInit(),
                (this._scenes = [s.app.Scene()]),
                (this._sceneIndex = 0),
                (this.updater = s.app.Updater(this)),
                (this.interactive = s.app.Interactive(this)),
                (this.awake = !0),
                (this.ticker = s.util.Ticker())
            },
            run: function() {
              var t = this
              return (
                (this._loopCaller = function() {
                  t._loop()
                }),
                this.ticker.tick(this._loopCaller),
                this.ticker.start(),
                this
              )
            },
            kill: function() {
              return (
                this.ticker.stop(), this.ticker.untick(this._loopCaller), this
              )
            },
            replaceScene: function(t) {
              this.flare('replace'), this.flare('changescene')
              return (
                this.currentScene && (this.currentScene.app = null),
                (this.currentScene = t),
                (this.currentScene.app = this),
                this.currentScene.flare('enter', {app: this}),
                this
              )
            },
            pushScene: function(t) {
              return (
                this.flare('push'),
                this.flare('changescene'),
                this.currentScene.flare('pause', {app: this}),
                this._scenes.push(t),
                ++this._sceneIndex,
                this.flare('pushed'),
                (t.app = this),
                t.flare('enter', {app: this}),
                this
              )
            },
            popScene: function() {
              this.flare('pop'), this.flare('changescene')
              var t = this._scenes.pop()
              return (
                --this._sceneIndex,
                t.flare('exit', {app: this}),
                (t.app = null),
                this.flare('poped'),
                this.currentScene.flare('resume', {app: this, prevScene: t}),
                t
              )
            },
            start: function() {
              return (this.awake = !0), this
            },
            stop: function() {
              return (this.awake = !1), this
            },
            enableStats: function() {
              if (s.global.Stats)
                (this.stats = new Stats()),
                  document.body.appendChild(this.stats.domElement)
              else {
                var t = document.createElement('script')
                ;(t.src =
                  'https://cdnjs.cloudflare.com/ajax/libs/stats.js/r14/Stats.js'),
                  document.body.appendChild(t),
                  (t.onload = function() {
                    this.enableStats()
                  }.bind(this))
              }
              return this
            },
            enableDatGUI: function(t) {
              if (s.global.dat) {
                var e = new s.global.dat.GUI()
                t(e)
              } else {
                var i = document.createElement('script')
                ;(i.src =
                  'https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.5.1/dat.gui.js'),
                  document.body.appendChild(i),
                  (i.onload = function() {
                    var e = new s.global.dat.GUI()
                    t(e)
                  }.bind(this))
              }
              return this
            },
            _loop: function() {
              this._update(),
                this.interactive.check(this.currentScene),
                this._draw(),
                this.stats && this.stats.update()
            },
            _update: function() {
              this.awake &&
                (this.has('enterframe') && this.flare('enterframe'),
                this.update && this.update(),
                this.updater.update(this.currentScene))
            },
            _draw: function() {},
            _accessor: {
              currentScene: {
                get: function() {
                  return this._scenes[this._sceneIndex]
                },
                set: function(t) {
                  this._scenes[this._sceneIndex] = t
                }
              },
              rootScene: {
                get: function() {
                  return this._scenes[0]
                },
                set: function(t) {
                  this._scenes[0] = t
                }
              },
              frame: {
                get: function() {
                  return this.ticker.frame
                },
                set: function(t) {
                  this.ticker.frame = t
                }
              },
              fps: {
                get: function() {
                  return this.ticker.fps
                },
                set: function(t) {
                  this.ticker.fps = t
                }
              },
              deltaTime: {
                get: function() {
                  return this.ticker.deltaTime
                }
              },
              elapsedTime: {
                get: function() {
                  return this.ticker.elapsedTime
                }
              },
              currentTime: {
                get: function() {
                  return this.ticker.currentTime
                }
              },
              startTime: {
                get: function() {
                  return this.ticker.startTime
                }
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.app.Element', {
            superClass: 'phina.util.EventDispatcher',
            parent: null,
            children: null,
            awake: !0,
            init: function() {
              this.superInit(), (this.children = [])
            },
            addChild: function(t) {
              return (
                t.parent && t.remove(),
                (t.parent = this),
                this.children.push(t),
                t.has('added') && t.flare('added'),
                t
              )
            },
            addChildTo: function(t) {
              return t.addChild(this), this
            },
            addChildAt: function(t, e) {
              return (
                t.parent && t.remove(),
                (t.parent = this),
                this.children.splice(e, 0, t),
                t.has('added') && t.flare('added'),
                t
              )
            },
            getChildAt: function(t) {
              return this.children.at(t)
            },
            getChildByName: function(t) {},
            getChildIndex: function(t) {
              return this.children.indexOf(t)
            },
            getParent: function() {
              return this.parent
            },
            getRoot: function() {
              var t = this
              for (t = this.parent; null != t.parent; t = t.parent);
              return t
            },
            removeChild: function(t) {
              var e = this.children.indexOf(t)
              return (
                -1 !== e &&
                  (this.children.splice(e, 1),
                  t.has('removed') && t.flare('removed')),
                this
              )
            },
            remove: function() {
              if (this.parent)
                return this.parent.removeChild(this), (this.parent = null), this
            },
            isAwake: function() {
              return this.awake
            },
            wakeUp: function() {
              return (this.awake = !0), this
            },
            sleep: function() {
              return (this.awake = !1), this
            },
            fromJSON: function(t) {
              var e = function(t, e) {
                var i = e.arguments
                i = i instanceof Array ? i : [i]
                var n = s.using(e.className).apply(null, i)
                ;(n.name = t), (this[t] = n), n.fromJSON(e), n.addChildTo(this)
              }.bind(this)
              return (
                t.forIn(function(t, i) {
                  'children' === t
                    ? i.forIn(function(t, i) {
                        e(t, i)
                      })
                    : 'type' !== t && 'className' !== t && (this[t] = i)
                }, this),
                this
              )
            },
            toJSON: function() {
              var t = Object.keys(s.using(this.className).defaults || {})
              this._hierarchies.forEach(function(e) {
                var i = e.defaults
                i &&
                  Object.keys(i).forEach(function(e) {
                    ;-1 === t.indexOf(e) && t.push(e)
                  })
              }),
                t.push('name', 'className')
              var e = {}
              t.each(function(t) {
                e[t] = this[t]
              }, this)
              var i = this.children.map(function(t) {
                return t.toJSON()
              })
              return (
                i.length &&
                  ((e.children = {}),
                  i.each(function(t, i) {
                    e.children[t.name || t.className + '_' + i] = t
                  })),
                e
              )
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.app.Object2D', {
            superClass: 'phina.app.Element',
            position: null,
            rotation: 0,
            scale: null,
            origin: null,
            init: function(t) {
              this.superInit(),
                (t = {}.$safe(t, s.app.Object2D.defaults)),
                (this.position = s.geom.Vector2(t.x, t.y)),
                (this.scale = s.geom.Vector2(t.scaleX, t.scaleY)),
                (this.rotation = t.rotation),
                (this.origin = s.geom.Vector2(t.originX, t.originY)),
                (this._matrix = s.geom.Matrix33().identity()),
                (this._worldMatrix = s.geom.Matrix33().identity()),
                (this.interactive = !1),
                (this._overFlags = {}),
                (this._touchFlags = {}),
                (this.width = t.width),
                (this.height = t.height),
                (this.radius = t.radius),
                (this.boundingType = t.boundingType)
            },
            hitTest: function(t, e) {
              return 'rect' === this.boundingType
                ? this.hitTestRect(t, e)
                : 'circle' !== this.boundingType || this.hitTestCircle(t, e)
            },
            hitTestRect: function(t, e) {
              var i = this.globalToLocal(s.geom.Vector2(t, e)),
                n = -this.width * this.originX,
                r = +this.width * (1 - this.originX),
                o = -this.height * this.originY,
                a = +this.height * (1 - this.originY)
              return n < i.x && i.x < r && o < i.y && i.y < a
            },
            hitTestCircle: function(t, e) {
              var i = this.globalToLocal(s.geom.Vector2(t, e))
              return i.x * i.x + i.y * i.y < this.radius * this.radius
            },
            hitTestElement: function(t) {
              var e = t
              return (
                this.left < e.right &&
                this.right > e.left &&
                this.top < e.bottom &&
                this.bottom > e.top
              )
            },
            globalToLocal: function(t) {
              var e = this._worldMatrix.clone()
              return e.invert(), e.multiplyVector2(t)
            },
            setInteractive: function(t, e) {
              return (this.interactive = t), e && (this.boundingType = e), this
            },
            setX: function(t) {
              return (this.position.x = t), this
            },
            setY: function(t) {
              return (this.position.y = t), this
            },
            setPosition: function(t, e) {
              return (this.position.x = t), (this.position.y = e), this
            },
            setRotation: function(t) {
              return (this.rotation = t), this
            },
            setScale: function(t, e) {
              return (
                (this.scale.x = t),
                arguments.length <= 1 ? (this.scale.y = t) : (this.scale.y = e),
                this
              )
            },
            setOrigin: function(t, e) {
              return (this.origin.x = t), (this.origin.y = e), this
            },
            setWidth: function(t) {
              return (this.width = t), this
            },
            setHeight: function(t) {
              return (this.height = t), this
            },
            setSize: function(t, e) {
              return (this.width = t), (this.height = e), this
            },
            setBoundingType: function(t) {
              return (this.boundingType = t), this
            },
            moveTo: function(t, e) {
              return (this.position.x = t), (this.position.y = e), this
            },
            moveBy: function(t, e) {
              return (this.position.x += t), (this.position.y += e), this
            },
            _calcWorldMatrix: function() {
              if (this.parent) {
                if (this.rotation != this._cachedRotation) {
                  this._cachedRotation = this.rotation
                  var t = this.rotation * (Math.PI / 180)
                  ;(this._sr = Math.sin(t)), (this._cr = Math.cos(t))
                }
                var e = this._matrix,
                  i = this.parent._worldMatrix || s.geom.Matrix33.IDENTITY,
                  n = this._worldMatrix
                ;(e.m00 = this._cr * this.scale.x),
                  (e.m01 = -this._sr * this.scale.y),
                  (e.m10 = this._sr * this.scale.x),
                  (e.m11 = this._cr * this.scale.y),
                  (e.m02 = this.position.x),
                  (e.m12 = this.position.y)
                var r = e.m00,
                  o = e.m01,
                  a = e.m02,
                  h = e.m10,
                  u = e.m11,
                  c = e.m12,
                  l = i.m00,
                  f = i.m01,
                  d = i.m02,
                  p = i.m10,
                  g = i.m11,
                  m = i.m12
                return (
                  (n.m00 = l * r + f * h),
                  (n.m01 = l * o + f * u),
                  (n.m02 = l * a + f * c + d),
                  (n.m10 = p * r + g * h),
                  (n.m11 = p * o + g * u),
                  (n.m12 = p * a + g * c + m),
                  this
                )
              }
            },
            _accessor: {
              x: {
                get: function() {
                  return this.position.x
                },
                set: function(t) {
                  this.position.x = t
                }
              },
              y: {
                get: function() {
                  return this.position.y
                },
                set: function(t) {
                  this.position.y = t
                }
              },
              originX: {
                get: function() {
                  return this.origin.x
                },
                set: function(t) {
                  this.origin.x = t
                }
              },
              originY: {
                get: function() {
                  return this.origin.y
                },
                set: function(t) {
                  this.origin.y = t
                }
              },
              scaleX: {
                get: function() {
                  return this.scale.x
                },
                set: function(t) {
                  this.scale.x = t
                }
              },
              scaleY: {
                get: function() {
                  return this.scale.y
                },
                set: function(t) {
                  this.scale.y = t
                }
              },
              width: {
                get: function() {
                  return 'rect' === this.boundingType
                    ? this._width
                    : this._diameter
                },
                set: function(t) {
                  this._width = t
                }
              },
              height: {
                get: function() {
                  return 'rect' === this.boundingType
                    ? this._height
                    : this._diameter
                },
                set: function(t) {
                  this._height = t
                }
              },
              radius: {
                get: function() {
                  return 'rect' === this.boundingType
                    ? (this.width + this.height) / 4
                    : this._radius
                },
                set: function(t) {
                  ;(this._radius = t), (this._diameter = 2 * t)
                }
              },
              top: {
                get: function() {
                  return this.y - this.height * this.originY
                },
                set: function(t) {
                  this.y = t + this.height * this.originY
                }
              },
              right: {
                get: function() {
                  return this.x + this.width * (1 - this.originX)
                },
                set: function(t) {
                  this.x = t - this.width * (1 - this.originX)
                }
              },
              bottom: {
                get: function() {
                  return this.y + this.height * (1 - this.originY)
                },
                set: function(t) {
                  this.y = t - this.height * (1 - this.originY)
                }
              },
              left: {
                get: function() {
                  return this.x - this.width * this.originX
                },
                set: function(t) {
                  this.x = t + this.width * this.originX
                }
              },
              centerX: {
                get: function() {
                  return this.x + this.width / 2 - this.width * this.originX
                },
                set: function(t) {}
              },
              centerY: {
                get: function() {
                  return this.y + this.height / 2 - this.height * this.originY
                },
                set: function(t) {}
              }
            },
            _static: {
              defaults: {
                x: 0,
                y: 0,
                scaleX: 1,
                scaleY: 1,
                rotation: 0,
                originX: 0.5,
                originY: 0.5,
                width: 64,
                height: 64,
                radius: 32,
                boundingType: 'rect'
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.app.Scene', {
            superClass: 'phina.app.Element',
            init: function() {
              this.superInit()
            },
            exit: function(t, e) {
              if (this.app)
                return (
                  arguments.length > 0 &&
                    ('object' == typeof arguments[0] &&
                      ((t = arguments[0].nextLabel || this.nextLabel),
                      (e = arguments[0])),
                    (this.nextLabel = t),
                    (this.nextArguments = e)),
                  this.app.popScene(),
                  this
                )
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.accessory.Accessory', {
            superClass: 'phina.util.EventDispatcher',
            init: function(t) {
              this.superInit(), (this.target = t)
            },
            setTarget: function(t) {
              if (this.target !== t) return (this.target = t), this
            },
            getTarget: function() {
              return this.target
            },
            isAttached: function() {
              return !!this.target
            },
            attachTo: function(t) {
              return t.attach(this), this.setTarget(t), this
            },
            remove: function() {
              this.target.detach(this), (this.target = null)
            }
          }),
            s.app.Element.prototype.$method('attach', function(t) {
              return (
                this.accessories ||
                  ((this.accessories = []),
                  this.on('enterframe', function(t) {
                    this.accessories.each(function(e) {
                      e.update && e.update(t.app)
                    })
                  })),
                this.accessories.push(t),
                t.setTarget(this),
                t.flare('attached'),
                this
              )
            }),
            s.app.Element.prototype.$method('detach', function(t) {
              return (
                this.accessories &&
                  (this.accessories.erase(t),
                  t.setTarget(null),
                  t.flare('detached')),
                this
              )
            })
        }),
        s.namespace(function() {
          var t = s.define('phina.accessory.Tweener', {
            superClass: 'phina.accessory.Accessory',
            updateType: 'delta',
            init: function(t) {
              this.superInit(t), this._init()
            },
            _init: function() {
              ;(this._loop = !1),
                (this._tasks = []),
                (this._index = 0),
                (this.playing = !0),
                (this._update = this._updateTask)
            },
            update: function(t) {
              this._update(t)
            },
            setUpdateType: function(t) {
              return (this.updateType = t), this
            },
            to: function(t, e, i) {
              return (
                this._add({
                  type: 'tween',
                  mode: 'to',
                  props: t,
                  duration: e,
                  easing: i
                }),
                this
              )
            },
            by: function(t, e, i) {
              return (
                this._add({
                  type: 'tween',
                  mode: 'by',
                  props: t,
                  duration: e,
                  easing: i
                }),
                this
              )
            },
            from: function(t, e, i) {
              return (
                this._add({
                  type: 'tween',
                  mode: 'from',
                  props: t,
                  duration: e,
                  easing: i
                }),
                this
              )
            },
            wait: function(t) {
              return this._add({type: 'wait', data: {limit: t}}), this
            },
            call: function(t, e, i) {
              return (
                this._add({
                  type: 'call',
                  data: {func: t, self: e || this, args: i}
                }),
                this
              )
            },
            set: function(t, e) {
              var i = null
              return (
                2 == arguments.length ? ((i = {})[t] = e) : (i = t),
                this._tasks.push({type: 'set', data: {values: i}}),
                this
              )
            },
            moveTo: function(t, e, i, n) {
              return this.to({x: t, y: e}, i, n)
            },
            moveBy: function(t, e, i, n) {
              return this.by({x: t, y: e}, i, n)
            },
            rotateTo: function(t, e, i) {
              return this.to({rotation: t}, e, i)
            },
            rotateBy: function(t, e, i) {
              return this.by({rotation: t}, e, i)
            },
            scaleTo: function(t, e, i) {
              return this.to({scaleX: t, scaleY: t}, e, i)
            },
            scaleBy: function(t, e, i) {
              return this.by({scaleX: t, scaleY: t}, e, i)
            },
            fade: function(t, e, i) {
              return this.to({alpha: t}, e, i)
            },
            fadeOut: function(t, e) {
              return this.fade(0, t, e)
            },
            fadeIn: function(t, e) {
              return this.fade(1, t, e)
            },
            play: function() {
              return (this.playing = !0), this
            },
            pause: function() {
              return (this.playing = !1), this
            },
            stop: function() {
              return (this.playing = !1), this.rewind(), this
            },
            rewind: function() {
              return (this._update = this._updateTask), (this._index = 0), this
            },
            yoyo: function() {
              return (
                (this._update = this._updateTask),
                (this._index = 0),
                this._tasks.each(function(t) {
                  t.type
                }),
                this.play(),
                this
              )
            },
            setLoop: function(t) {
              return (this._loop = t), this
            },
            clear: function() {
              return this._init(), this
            },
            fromJSON: function(t) {
              return (
                void 0 !== t.loop && this.setLoop(t.loop),
                t.tweens.each(function(t) {
                  this[(t = t.clone()).shift()].apply(this, t)
                }, this),
                this
              )
            },
            _add: function(t) {
              this._tasks.push(t)
            },
            _updateTask: function(t) {
              if (this.playing) {
                var e = this._tasks[this._index]
                if (e)
                  if ((++this._index, 'tween' === e.type)) {
                    this._tween = s.util.Tween()
                    var i = e.duration || this._getDefaultDuration()
                    'to' === e.mode
                      ? this._tween.to(this.target, e.props, i, e.easing)
                      : 'by' === e.mode
                      ? this._tween.by(this.target, e.props, i, e.easing)
                      : this._tween.from(this.target, e.props, i, e.easing),
                      (this._update = this._updateTween),
                      this._update(t)
                  } else
                    'wait' === e.type
                      ? ((this._wait = {time: 0, limit: e.data.limit}),
                        (this._update = this._updateWait),
                        this._update(t))
                      : 'call' === e.type
                      ? (e.data.func.apply(e.data.self, e.data.args),
                        this._update(t))
                      : 'set' === e.type &&
                        (this.target.$extend(e.data.values), this._update(t))
                else
                  this._loop
                    ? (this.rewind(), this._update(t))
                    : (this.playing = !1)
              }
            },
            _updateTween: function(t) {
              var e = this._tween,
                i = this._getUnitTime(t)
              e.forward(i),
                this.flare('tween'),
                e.time >= e.duration &&
                  (delete this._tween,
                  (this._tween = null),
                  (this._update = this._updateTask))
            },
            _updateWait: function(t) {
              var e = this._wait,
                i = this._getUnitTime(t)
              ;(e.time += i),
                e.time >= e.limit &&
                  (delete this._wait,
                  (this._wait = null),
                  (this._update = this._updateTask))
            },
            _getUnitTime: function(e) {
              var i = t[this.updateType]
              return i ? i.func(e) : 1e3 / e.fps
            },
            _getDefaultDuration: function() {
              var e = t[this.updateType]
              return e && e.duration
            },
            _static: {
              UPDATE_MAP: {
                normal: {
                  func: function(t) {
                    return 1e3 / t.fps
                  },
                  duration: 1e3
                },
                delta: {
                  func: function(t) {
                    return t.ticker.deltaTime
                  },
                  duration: 1e3
                },
                fps: {
                  func: function(t) {
                    return 1
                  },
                  duration: 30
                }
              }
            }
          }).UPDATE_MAP
          s.app.Element.prototype.getter('tweener', function() {
            return (
              this._tweener ||
                (this._tweener = s.accessory.Tweener().attachTo(this)),
              this._tweener
            )
          })
        }),
        s.namespace(function() {
          s.define('phina.accessory.Draggable', {
            superClass: 'phina.accessory.Accessory',
            init: function(t) {
              this.superInit(t), (this.initialPosition = s.geom.Vector2(0, 0))
              var e = this
              this.on('attached', function() {
                this.target.setInteractive(!0),
                  (this._dragging = !1),
                  this.target.on('pointstart', function(t) {
                    s.accessory.Draggable._lock ||
                      ((this._dragging = !0),
                      (e.initialPosition.x = this.x),
                      (e.initialPosition.y = this.y),
                      e.flare('dragstart'),
                      this.flare('dragstart'))
                  }),
                  this.target.on('pointmove', function(t) {
                    this._dragging &&
                      ((this.x += t.pointer.dx),
                      (this.y += t.pointer.dy),
                      e.flare('drag'),
                      this.flare('drag'))
                  }),
                  this.target.on('pointend', function(t) {
                    this._dragging &&
                      ((this._dragging = !1),
                      e.flare('dragend'),
                      this.flare('dragend'))
                  })
              })
            },
            back: function(t, e) {
              if (t) {
                var i = this.target
                i.setInteractive(!1)
                var n = s.accessory.Tweener().attachTo(i)
                n.to(
                  {x: this.initialPosition.x, y: this.initialPosition.y},
                  t,
                  e || 'easeOutElastic'
                ).call(function() {
                  n.remove(), i.setInteractive(!0), this.flare('backend')
                }, this)
              } else
                (this.target.x = this.initialPosition.x),
                  (this.target.y = this.initialPosition.y),
                  this.flare('backend')
            },
            enable: function() {
              this._enable = !0
            },
            _static: {
              _lock: !1,
              lock: function() {
                this._lock = !0
              },
              unlock: function() {
                this._lock = !1
              }
            }
          }),
            s.app.Element.prototype.getter('draggable', function() {
              return (
                this._draggable ||
                  (this._draggable = s.accessory.Draggable().attachTo(this)),
                this._draggable
              )
            })
        }),
        s.namespace(function() {
          s.define('phina.accessory.Flickable', {
            superClass: 'phina.accessory.Accessory',
            init: function(t) {
              this.superInit(t), (this.initialPosition = s.geom.Vector2(0, 0))
              var e = this
              ;(this.friction = 0.9),
                (this.velocity = s.geom.Vector2(0, 0)),
                (this.vertical = !0),
                (this.horizontal = !0),
                (this.cacheList = []),
                this.on('attached', function() {
                  this.target.setInteractive(!0),
                    this.target.on('pointstart', function(t) {
                      e.initialPosition.set(this.x, this.y),
                        e.velocity.set(0, 0)
                    }),
                    this.target.on('pointstay', function(t) {
                      e.horizontal && (this.x += t.pointer.dx),
                        e.vertical && (this.y += t.pointer.dy),
                        e.cacheList.length > 3 && e.cacheList.shift(),
                        e.cacheList.push(t.pointer.deltaPosition.clone())
                    }),
                    this.target.on('pointend', function(t) {
                      var i = e.cacheList.reverse().find(function(t) {
                        return t.lengthSquared() > 10
                      })
                      e.cacheList.clear(),
                        i
                          ? ((e.velocity.x = i.x),
                            (e.velocity.y = i.y),
                            e.flare('flickstart', {direction: i.normalize()}))
                          : e.flare('flickcancel')
                    })
                })
            },
            update: function() {
              this.target &&
                ((this.velocity.x *= this.friction),
                (this.velocity.y *= this.friction),
                this.horizontal && (this.target.position.x += this.velocity.x),
                this.vertical && (this.target.position.y += this.velocity.y))
            },
            cancel: function() {
              ;(this.target.x = this.initialPosition.x),
                (this.target.y = this.initialPosition.y),
                this.velocity.set(0, 0)
            },
            enable: function() {
              this._enable = !0
            }
          }),
            s.app.Element.prototype.getter('flickable', function() {
              return (
                this._flickable ||
                  (this._flickable = s.accessory.Flickable().attachTo(this)),
                this._flickable
              )
            })
        }),
        s.namespace(function() {
          s.define('phina.accessory.FrameAnimation', {
            superClass: 'phina.accessory.Accessory',
            init: function(t) {
              this.superInit(),
                (this.ss = s.asset.AssetManager.get('spritesheet', t)),
                (this.paused = !0),
                (this.finished = !1),
                (this.fit = !0)
            },
            update: function() {
              if (!this.paused && this.currentAnimation) {
                if (this.finished)
                  return (this.finished = !1), void (this.currentFrameIndex = 0)
                ++this.frame,
                  this.frame % this.currentAnimation.frequency == 0 &&
                    (++this.currentFrameIndex, this._updateFrame())
              }
            },
            gotoAndPlay: function(t, e) {
              return (e = void 0 === e || e) &&
                t === this.currentAnimationName &&
                this.currentFrameIndex < this.currentAnimation.frames.length &&
                !this.paused
                ? this
                : ((this.currentAnimationName = t),
                  (this.frame = 0),
                  (this.currentFrameIndex = 0),
                  (this.currentAnimation = this.ss.getAnimation(t)),
                  this._updateFrame(),
                  (this.paused = !1),
                  this)
            },
            gotoAndStop: function(t) {
              return (
                (this.currentAnimationName = t),
                (this.frame = 0),
                (this.currentFrameIndex = 0),
                (this.currentAnimation = this.ss.getAnimation(t)),
                this._updateFrame(),
                (this.paused = !0),
                this
              )
            },
            _updateFrame: function() {
              var t = this.currentAnimation
              if (t && this.currentFrameIndex >= t.frames.length)
                return t.next
                  ? void this.gotoAndPlay(t.next)
                  : ((this.paused = !0), void (this.finished = !0))
              var e = t.frames[this.currentFrameIndex],
                i = this.ss.getFrame(e)
              this.target.srcRect.set(i.x, i.y, i.width, i.height),
                this.fit &&
                  ((this.target.width = i.width),
                  (this.target.height = i.height))
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.accessory.Physical', {
            superClass: 'phina.accessory.Accessory',
            init: function(t) {
              this.superInit(t),
                (this.velocity = s.geom.Vector2(0, 0)),
                (this.gravity = s.geom.Vector2(0, 0)),
                (this.friction = 1)
            },
            update: function() {
              var t = this.target
              ;(this.velocity.x *= this.friction),
                (this.velocity.y *= this.friction),
                (this.velocity.x += this.gravity.x),
                (this.velocity.y += this.gravity.y),
                (t.position.x += this.velocity.x),
                (t.position.y += this.velocity.y)
            },
            force: function(t, e) {
              return this.velocity.set(t, e), this
            },
            addForce: function(t, e) {
              return (this.velocity.x += t), (this.velocity.y += e), this
            },
            setGravity: function(t, e) {
              return this.gravity.set(t, e), this
            },
            setFriction: function(t) {
              return (this.friction = t), this
            }
          }),
            s.app.Element.prototype.getter('physical', function() {
              return (
                this._physical ||
                  (this._physical = s.accessory.Physical().attachTo(this)),
                this._physical
              )
            })
        }),
        s.global.Event &&
          (Event.prototype.stop = function() {
            this.preventDefault(), this.stopPropagation()
          }),
        s.global.MouseEvent &&
          (MouseEvent.prototype.getter('pointX', function() {
            return this.clientX - this.target.getBoundingClientRect().left
          }),
          MouseEvent.prototype.getter('pointY', function() {
            return this.clientY - this.target.getBoundingClientRect().top
          })),
        s.global.TouchEvent &&
          (TouchEvent.prototype.getter('pointX', function() {
            return (
              this.touches[0].clientX - this.target.getBoundingClientRect().left
            )
          }),
          TouchEvent.prototype.getter('pointY', function() {
            return (
              this.touches[0].clientY - this.target.getBoundingClientRect().top
            )
          })),
        s.global.Touch &&
          (Touch.prototype.getter('pointX', function() {
            return this.clientX - this.target.getBoundingClientRect().left
          }),
          Touch.prototype.getter('pointY', function() {
            return this.clientY - this.target.getBoundingClientRect().top
          })),
        s.namespace(function() {
          s.define('phina.graphics.Canvas', {
            domElement: null,
            canvas: null,
            context: null,
            init: function(t) {
              ;(this.canvas =
                'string' == typeof t
                  ? document.querySelector(t)
                  : t || document.createElement('canvas')),
                (this.domElement = this.canvas),
                (this.context = this.canvas.getContext('2d')),
                (this.context.lineCap = 'round'),
                (this.context.lineJoin = 'round')
            },
            setSize: function(t, e) {
              return (this.canvas.width = t), (this.canvas.height = e), this
            },
            setSizeToScreen: function() {
              return (
                (this.canvas.style.position = 'fixed'),
                (this.canvas.style.margin = '0px'),
                (this.canvas.style.padding = '0px'),
                (this.canvas.style.left = '0px'),
                (this.canvas.style.top = '0px'),
                this.setSize(window.innerWidth, window.innerHeight)
              )
            },
            fitScreen: function(t) {
              t = void 0 === t || t
              var e = function() {
                var t = this.domElement,
                  e = t.style
                ;(e.position = 'absolute'),
                  (e.margin = 'auto'),
                  (e.left = '0px'),
                  (e.top = '0px'),
                  (e.bottom = '0px'),
                  (e.right = '0px')
                var i = t.width / window.innerWidth,
                  n = t.height / window.innerHeight,
                  s = t.height / t.width
                i > n
                  ? ((e.width = Math.floor(innerWidth) + 'px'),
                    (e.height = Math.floor(innerWidth * s) + 'px'))
                  : ((e.width = Math.floor(innerHeight / s) + 'px'),
                    (e.height = Math.floor(innerHeight) + 'px'))
              }.bind(this)
              e(), t && s.global.addEventListener('resize', e, !1)
            },
            clear: function(t, e, i, n) {
              return (
                (t = t || 0),
                (e = e || 0),
                (i = i || this.width),
                (n = n || this.height),
                this.context.clearRect(t, e, i, n),
                this
              )
            },
            clearColor: function(t, e, i, n, s) {
              ;(e = e || 0),
                (i = i || 0),
                (n = n || this.width),
                (s = s || this.height)
              var r = this.context
              return (
                r.save(),
                r.setTransform(1, 0, 0, 1, 0, 0),
                (r.fillStyle = t),
                r.fillRect(e, i, n, s),
                r.restore(),
                this
              )
            },
            beginPath: function() {
              return this.context.beginPath(), this
            },
            closePath: function() {
              return this.context.closePath(), this
            },
            moveTo: function(t, e) {
              return this.context.moveTo(t, e), this
            },
            lineTo: function(t, e) {
              return this.context.lineTo(t, e), this
            },
            quadraticCurveTo: function() {
              return (
                this.context.quadraticCurveTo.apply(this.context, arguments),
                this
              )
            },
            bezierCurveTo: function() {
              return (
                this.context.bezierCurveTo.apply(this.context, arguments), this
              )
            },
            fill: function() {
              return this.context.fill(), this
            },
            stroke: function() {
              return this.context.stroke(), this
            },
            clip: function() {
              return this.context.clip(), this
            },
            drawPoint: function(t, e) {
              return this.strokeRect(t, e, 1, 1)
            },
            line: function(t, e, i, n) {
              return this.moveTo(t, e).lineTo(i, n)
            },
            drawLine: function(t, e, i, n) {
              return this.beginPath()
                .line(t, e, i, n)
                .stroke()
            },
            drawDashLine: function(t, e, i, n, s) {
              var r = null
              r = (r =
                'string' == typeof s
                  ? s
                  : (s = s || 61680).toString(2)).padding(16, '1')
              var o = i - t,
                a = n - e,
                h = Math.sqrt(o * o + a * a)
              ;(o /= h), (a /= h)
              for (var u = t, c = e, l = 0; l < h; ++l)
                '1' == r[l % 16] && this.drawPoint(u, c), (u += o), (c += a)
              return this
            },
            drawArrow: function(t, e, i, n, s) {
              var r = i - t,
                o = n - e,
                a = (180 * Math.atan2(o, r)) / Math.PI
              return (
                this.drawLine(t, e, i, n),
                this.fillPolygon(i, n, s || 5, 3, a),
                this
              )
            },
            lines: function() {
              this.moveTo(arguments[0], arguments[1])
              for (var t = 1, e = arguments.length / 2; t < e; ++t)
                this.lineTo(arguments[2 * t], arguments[2 * t + 1])
              return this
            },
            strokeLines: function() {
              return (
                this.beginPath(),
                this.lines.apply(this, arguments),
                this.stroke(),
                this
              )
            },
            fillLines: function() {
              return (
                this.beginPath(),
                this.lines.apply(this, arguments),
                this.fill(),
                this
              )
            },
            rect: function(t, e, i, n) {
              return this.context.rect.apply(this.context, arguments), this
            },
            fillRect: function() {
              return this.context.fillRect.apply(this.context, arguments), this
            },
            strokeRect: function() {
              return (
                this.context.strokeRect.apply(this.context, arguments), this
              )
            },
            roundRect: function(t, e, i, n, s) {
              var r = t + s,
                o = t + i - s,
                a = e + s,
                h = e + n - s
              return (
                this.context.arc(r, a, s, -Math.PI, 0.5 * -Math.PI, !1),
                this.context.arc(o, a, s, 0.5 * -Math.PI, 0, !1),
                this.context.arc(o, h, s, 0, 0.5 * Math.PI, !1),
                this.context.arc(r, h, s, 0.5 * Math.PI, Math.PI, !1),
                this.closePath(),
                this
              )
            },
            fillRoundRect: function(t, e, i, n, s) {
              return this.beginPath()
                .roundRect(t, e, i, n, s)
                .fill()
            },
            strokeRoundRect: function(t, e, i, n, s) {
              return this.beginPath()
                .roundRect(t, e, i, n, s)
                .stroke()
            },
            circle: function(t, e, i) {
              return this.context.arc(t, e, i, 0, 2 * Math.PI, !1), this
            },
            fillCircle: function(t, e, i) {
              var n = this.context
              return (
                n.beginPath(),
                n.arc(t, e, i, 0, 2 * Math.PI, !1),
                n.closePath(),
                n.fill(),
                this
              )
            },
            strokeCircle: function(t, e, i) {
              var n = this.context
              return (
                n.beginPath(),
                n.arc(t, e, i, 0, 2 * Math.PI, !1),
                n.closePath(),
                n.stroke(),
                this
              )
            },
            arc: function(t, e, i, n, s, r) {
              return this.context.arc(t, e, i, n, s, r), this
            },
            fillArc: function(t, e, i, n, s, r) {
              return this.beginPath()
                .arc(t, e, i, n, s, r)
                .fill()
            },
            strokeArc: function(t, e, i, n, s, r) {
              return this.beginPath()
                .arc(t, e, i, n, s, r)
                .stroke()
            },
            pie: function(t, e, i, n, s, r) {
              var o = this.context
              return (
                o.beginPath(),
                o.moveTo(0, 0),
                o.arc(t, e, i, n, s, r),
                o.closePath(),
                this
              )
            },
            fillPie: function(t, e, i, n, s, r) {
              return this.beginPath()
                .pie(t, e, i, n, s, r)
                .fill()
            },
            strokePie: function(t, e, i, n, s, r) {
              return this.beginPath()
                .pie(t, e, i, n, s, r)
                .stroke()
            },
            polygon: function(t, e, i, n, s) {
              var r = (2 * Math.PI) / n,
                o = void 0 !== s ? (s * Math.PI) / 180 : -Math.PI / 2
              this.moveTo(t + Math.cos(o) * i, e + Math.sin(o) * i)
              for (var a = 1; a < n; ++a) {
                var h = r * a + o
                this.lineTo(t + Math.cos(h) * i, e + Math.sin(h) * i)
              }
              return this.closePath(), this
            },
            fillPolygon: function(t, e, i, n, s) {
              return this.beginPath()
                .polygon(t, e, i, n, s)
                .fill()
            },
            strokePolygon: function(t, e, i, n, s) {
              return this.beginPath()
                .polygon(t, e, i, n, s)
                .stroke()
            },
            star: function(t, e, i, n, s, r) {
              ;(t = t || 0), (e = e || 0), (n = n || 5)
              var o = (i = i || 64) * (s || 0.38),
                a = r ? (r * Math.PI) / 180 : -Math.PI / 2,
                h = (2 * Math.PI) / n / 2
              this.moveTo(t + Math.cos(a) * i, e + Math.sin(a) * i)
              for (var u = 1; u < 2 * n; ++u) {
                var c = h * u + a,
                  l = u % 2 ? o : i
                this.lineTo(t + Math.cos(c) * l, e + Math.sin(c) * l)
              }
              return this.closePath(), this
            },
            fillStar: function(t, e, i, n, s, r) {
              return (
                this.beginPath()
                  .star(t, e, i, n, s, r)
                  .fill(),
                this
              )
            },
            strokeStar: function(t, e, i, n, s, r) {
              return (
                this.beginPath()
                  .star(t, e, i, n, s, r)
                  .stroke(),
                this
              )
            },
            heart: function(t, e, i, n) {
              var s = 0.5 * i,
                r = void 0 === n ? Math.PI / 4 : Math.degToRad(n),
                o = (s * s - Math.cos(r) * s * -s) / (Math.sin(r) * s),
                a = s - (o + s) / 2
              return (
                this.moveTo(0 + t, o + e + a),
                this.arc(-s + t, 0 + e + a, s, Math.PI - r, 2 * Math.PI),
                this.arc(s + t, 0 + e + a, s, Math.PI, r),
                this.closePath(),
                this
              )
            },
            fillHeart: function(t, e, i, n) {
              return this.beginPath()
                .heart(t, e, i, n)
                .fill()
            },
            strokeHeart: function(t, e, i, n) {
              return this.beginPath()
                .heart(t, e, i, n)
                .stroke()
            },
            ellipse: function(t, e, i, n) {
              var s = this.context,
                r = (i / 2) * 0.5522848,
                o = (n / 2) * 0.5522848,
                a = t + i,
                h = e + n,
                u = t + i / 2,
                c = e + n / 2
              return (
                s.moveTo(t, c),
                s.bezierCurveTo(t, c - o, u - r, e, u, e),
                s.bezierCurveTo(u + r, e, a, c - o, a, c),
                s.bezierCurveTo(a, c + o, u + r, h, u, h),
                s.bezierCurveTo(u - r, h, t, c + o, t, c),
                this
              )
            },
            fillEllipse: function(t, e, i, n) {
              return this.beginPath()
                .ellipse(t, e, i, n)
                .fill()
            },
            strokeEllipse: function(t, e, i, n) {
              return this.beginPath()
                .ellipse(t, e, i, n)
                .stroke()
            },
            fillText: function() {
              return (
                this._context.fillText.apply(this._context, arguments), this
              )
            },
            strokeText: function() {
              return (
                this._context.strokeText.apply(this._context, arguments), this
              )
            },
            drawImage: function() {
              this.context.drawImage.apply(this.context, arguments)
            },
            setTransform: function(t, e, i, n, s, r) {
              return this.context.setTransform(t, e, i, n, s, r), this
            },
            resetTransform: function() {
              return this.setTransform(1, 0, 0, 1, 0, 0), this
            },
            transformCenter: function() {
              return (
                this.context.setTransform(
                  1,
                  0,
                  0,
                  1,
                  this.width / 2,
                  this.height / 2
                ),
                this
              )
            },
            translate: function(t, e) {
              return this.context.translate(t, e), this
            },
            rotate: function(t) {
              return this.context.rotate(t), this
            },
            scale: function(t, e) {
              return this.context.scale(t, e), this
            },
            save: function() {
              return this.context.save(), this
            },
            restore: function() {
              return this.context.restore(), this
            },
            saveAsImage: function(t) {
              t = t || 'image/png'
              var e = this.canvas.toDataURL(t)
              window.open(e, 'save')
            },
            _accessor: {
              width: {
                get: function() {
                  return this.canvas.width
                },
                set: function(t) {
                  this.canvas.width = t
                }
              },
              height: {
                get: function() {
                  return this.canvas.height
                },
                set: function(t) {
                  this.canvas.height = t
                }
              },
              fillStyle: {
                get: function() {
                  return this.context.fillStyle
                },
                set: function(t) {
                  this.context.fillStyle = t
                }
              },
              strokeStyle: {
                get: function() {
                  return this.context.strokeStyle
                },
                set: function(t) {
                  this.context.strokeStyle = t
                }
              },
              globalAlpha: {
                get: function() {
                  return this.context.globalAlpha
                },
                set: function(t) {
                  this.context.globalAlpha = t
                }
              },
              globalCompositeOperation: {
                get: function() {
                  return this.context.globalCompositeOperation
                },
                set: function(t) {
                  this.context.globalCompositeOperation = t
                }
              },
              shadowBlur: {
                get: function() {
                  return this.context.shadowBlur
                },
                set: function(t) {
                  this.context.shadowBlur = t
                }
              },
              shadowColor: {
                get: function() {
                  return this.context.shadowColor
                },
                set: function(t) {
                  this.context.shadowColor = t
                }
              },
              shadowOffsetX: {
                get: function() {
                  return this.context.shadowOffsetX
                },
                set: function(t) {
                  this.context.shadowOffsetX = t
                }
              },
              shadowOffsetY: {
                get: function() {
                  return this.context.shadowOffsetY
                },
                set: function(t) {
                  this.context.shadowOffsetY = t
                }
              },
              lineCap: {
                get: function() {
                  return this.context.lineCap
                },
                set: function(t) {
                  this.context.lineCap = t
                }
              },
              lineJoin: {
                get: function() {
                  return this.context.lineJoin
                },
                set: function(t) {
                  this.context.lineJoin = t
                }
              },
              miterLimit: {
                get: function() {
                  return this.context.miterLimit
                },
                set: function(t) {
                  this.context.miterLimit = t
                }
              },
              lineWidth: {
                get: function() {
                  return this.context.lineWidth
                },
                set: function(t) {
                  this.context.lineWidth = t
                }
              },
              font: {
                get: function() {
                  return this.context.font
                },
                set: function(t) {
                  this.context.font = t
                }
              },
              textAlign: {
                get: function() {
                  return this.context.textAlign
                },
                set: function(t) {
                  this.context.textAlign = t
                }
              },
              textBaseline: {
                get: function() {
                  return this.context.textBaseline
                },
                set: function(t) {
                  this.context.textBaseline = t
                }
              },
              imageSmoothingEnabled: {
                get: function() {
                  return this.context.imageSmoothingEnabled
                },
                set: function(t) {
                  ;(this.context.imageSmoothingEnabled = t),
                    (this.context.webkitImageSmoothingEnabled = t),
                    (this.context.mozImageSmoothingEnabled = t)
                }
              }
            },
            _static: {
              _context: s.util.Support.canvas
                ? document.createElement('canvas').getContext('2d')
                : null,
              measureText: function(t, e) {
                return (this._context.font = t), this._context.measureText(e)
              },
              createLinearGradient: function() {
                return this._context.createLinearGradient.apply(
                  this._context,
                  arguments
                )
              },
              createRadialGradient: function() {
                return this._context.createRadialGradient.apply(
                  this._context,
                  arguments
                )
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.graphics.CanvasRecorder', {
            superClass: 'phina.util.EventDispatcher',
            _id: null,
            objectURL: null,
            init: function(t, e) {
              this.superInit(),
                (this.canvas = t),
                (this.gif = new GIF(
                  (e || {}).$safe({
                    workers: 4,
                    quality: 10,
                    width: t.width,
                    height: t.height
                  })
                )),
                this.gif.on(
                  'finished',
                  function(t) {
                    ;(this.objectURL = URL.createObjectURL(t)),
                      this.flare('finished')
                  }.bind(this)
                )
            },
            setOption: function(t, e) {
              return this.gif.setOption(t, e), this
            },
            setOptions: function(t) {
              return this.gif.setOptions(t), this
            },
            start: function(t, e) {
              e = e || 2e3
              var i = 1e3 / (t = t || 30),
                n = 0
              return (
                (this._id = setInterval(
                  function() {
                    var t = this.canvas.context
                    this.gif.addFrame(t, {copy: !0, delay: i}),
                      (n += i) > e && this.stop()
                  }.bind(this),
                  i
                )),
                this
              )
            },
            stop: function() {
              return null === this._id
                ? this
                : (clearInterval(this._id),
                  this.gif.render(),
                  (this._id = null),
                  this)
            },
            open: function() {
              window.open(this.objectURL)
            },
            _accessor: {
              width: {
                get: function() {
                  return this.gif.options.width || this.canvas.width
                },
                set: function(t) {
                  this.setOption('width', t)
                }
              },
              height: {
                get: function() {
                  return this.gif.options.height || this.canvas.height
                },
                set: function(t) {
                  this.setOption('height', t)
                }
              },
              quality: {
                get: function() {
                  return this.gif.options.quality
                },
                set: function(t) {
                  this.setOption('quality', t)
                }
              },
              workerScript: {
                get: function() {
                  return this.gif.options.workerScript
                },
                set: function(t) {
                  this.setOption('workerScript', t)
                }
              },
              workers: {
                get: function() {
                  return this.gif.options.workers
                },
                set: function(t) {
                  this.setOption('workers', t)
                }
              },
              repeat: {
                get: function() {
                  return this.gif.options.repeat
                },
                set: function(t) {
                  this.setOption('repeat', t)
                }
              },
              loop: {
                get: function() {
                  return 0 === this.gif.options.repeat
                },
                set: function(t) {
                  this.setOption('repeat', t ? 0 : -1)
                }
              },
              transparent: {
                get: function() {
                  return this.gif.options.transparent
                },
                set: function(t) {
                  this.setOption('transparent', t)
                }
              },
              background: {
                get: function() {
                  return this.gif.options.background
                },
                set: function(t) {
                  this.setOption('background', t)
                }
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.display.DisplayElement', {
            superClass: 'phina.app.Object2D',
            visible: !0,
            alpha: 1,
            blendMode: 'source-over',
            renderChildBySelf: !1,
            init: function(t) {
              ;(t = t || {}),
                this.superInit(t),
                (this.visible = !0),
                (this.alpha = 1),
                (this._worldAlpha = 1)
            },
            setVisible: function(t) {
              return (this.visible = t), this
            },
            show: function() {
              return (this.visible = !0), this
            },
            hide: function() {
              return (this.visible = !1), this
            },
            _calcWorldAlpha: function() {
              if (this.alpha < 0) this._worldAlpha = 0
              else if (this.parent) {
                var t =
                  void 0 !== this.parent._worldAlpha
                    ? this.parent._worldAlpha
                    : 1
                this._worldAlpha = t * this.alpha
              } else this._worldAlpha = this.alpha
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.display.PlainElement', {
            superClass: 'phina.display.DisplayElement',
            init: function(t) {
              this.superInit(t),
                (this.canvas = s.graphics.Canvas()),
                this.canvas.setSize(this.width, this.height)
            },
            draw: function(t) {
              var e = this.canvas.domElement,
                i = e.width,
                n = e.height,
                s = -i * this.origin.x,
                r = -n * this.origin.y
              t.context.drawImage(e, 0, 0, i, n, s, r, i, n)
            }
          })
        }),
        s.namespace(function() {
          var t = s.define('phina.display.Shape', {
            superClass: 'phina.display.PlainElement',
            init: function(t) {
              ;(t = {}.$safe(t, {
                width: 64,
                height: 64,
                padding: 8,
                backgroundColor: '#aaa',
                fill: '#00a',
                stroke: '#aaa',
                strokeWidth: 4,
                shadow: !1,
                shadowBlur: 4
              })),
                this.superInit(t),
                (this.padding = t.padding),
                (this.backgroundColor = t.backgroundColor),
                (this.fill = t.fill),
                (this.stroke = t.stroke),
                (this.strokeWidth = t.strokeWidth),
                (this.shadow = t.shadow),
                (this.shadowBlur = t.shadowBlur),
                (this.watchDraw = !0),
                (this._dirtyDraw = !0)
              var e = function() {
                this.watchDraw &&
                  !0 === this._dirtyDraw &&
                  (this.render(this.canvas), (this._dirtyDraw = !1))
              }
              this.on('enterframe', e), this.on('added', e)
            },
            calcCanvasWidth: function() {
              return this.width + 2 * this.padding
            },
            calcCanvasHeight: function() {
              return this.height + 2 * this.padding
            },
            calcCanvasSize: function() {
              return {
                width: this.calcCanvasWidth(),
                height: this.calcCanvasHeight()
              }
            },
            isStrokable: function() {
              return this.stroke && 0 < this.strokeWidth
            },
            prerender: function(t) {},
            postrender: function(t) {},
            renderFill: function(t) {
              t.fill()
            },
            renderStroke: function(t) {
              t.stroke()
            },
            render: function(t) {
              var e = t.context,
                i = this.calcCanvasSize()
              return (
                t.setSize(i.width, i.height),
                t.clearColor(this.backgroundColor),
                t.transformCenter(),
                this.prerender(this.canvas),
                this.isStrokable() &&
                  ((e.strokeStyle = this.stroke),
                  (e.lineWidth = this.strokeWidth),
                  (e.lineJoin = 'round'),
                  (e.shadowBlur = 0),
                  this.renderStroke(t)),
                this.fill &&
                  ((e.fillStyle = this.fill),
                  this.shadow
                    ? ((e.shadowColor = this.shadow),
                      (e.shadowBlur = this.shadowBlur))
                    : (e.shadowBlur = 0),
                  this.renderFill(t)),
                this.postrender(this.canvas),
                this
              )
            },
            _static: {
              watchRenderProperty: function(t) {
                this.prototype.$watch(t, function(t, e) {
                  t !== e && (this._dirtyDraw = !0)
                })
              },
              watchRenderProperties: function(e) {
                var i = this.watchRenderProperty || t.watchRenderProperty
                e.each(function(t) {
                  i.call(this, t)
                }, this)
              }
            },
            _defined: function() {
              this.watchRenderProperties([
                'width',
                'height',
                'radius',
                'padding',
                'backgroundColor',
                'fill',
                'stroke',
                'strokeWidth',
                'shadow',
                'shadowBlur'
              ])
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.display.RectangleShape', {
            superClass: 'phina.display.Shape',
            init: function(t) {
              ;(t = {}.$safe(t, {
                backgroundColor: 'transparent',
                fill: 'blue',
                stroke: '#aaa',
                strokeWidth: 4,
                cornerRadius: 0
              })),
                this.superInit(t),
                (this.cornerRadius = t.cornerRadius)
            },
            prerender: function(t) {
              t.roundRect(
                -this.width / 2,
                -this.height / 2,
                this.width,
                this.height,
                this.cornerRadius
              )
            },
            _defined: function() {
              s.display.Shape.watchRenderProperty.call(this, 'cornerRadius')
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.display.CircleShape', {
            superClass: 'phina.display.Shape',
            init: function(t) {
              ;(t = {}.$safe(t, {
                backgroundColor: 'transparent',
                fill: 'red',
                stroke: '#aaa',
                strokeWidth: 4,
                radius: 32
              })),
                this.superInit(t),
                this.setBoundingType('circle')
            },
            prerender: function(t) {
              t.circle(0, 0, this.radius)
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.display.TriangleShape', {
            superClass: 'phina.display.Shape',
            init: function(t) {
              ;(t = {}.$safe(t, {
                backgroundColor: 'transparent',
                fill: 'green',
                stroke: '#aaa',
                strokeWidth: 4,
                radius: 32
              })),
                this.superInit(t),
                this.setBoundingType('circle')
            },
            prerender: function(t) {
              t.polygon(0, 0, this.radius, 3)
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.display.StarShape', {
            superClass: 'phina.display.Shape',
            init: function(t) {
              ;(t = {}.$safe(t, {
                backgroundColor: 'transparent',
                fill: 'yellow',
                stroke: '#aaa',
                strokeWidth: 4,
                radius: 32,
                sides: 5,
                sideIndent: 0.38
              })),
                this.superInit(t),
                this.setBoundingType('circle'),
                (this.sides = t.sides),
                (this.sideIndent = t.sideIndent)
            },
            prerender: function(t) {
              t.star(0, 0, this.radius, this.sides, this.sideIndent)
            },
            _defined: function() {
              s.display.Shape.watchRenderProperty.call(this, 'sides'),
                s.display.Shape.watchRenderProperty.call(this, 'sideIndent')
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.display.PolygonShape', {
            superClass: 'phina.display.Shape',
            init: function(t) {
              ;(t = {}.$safe(t, {
                backgroundColor: 'transparent',
                fill: 'cyan',
                stroke: '#aaa',
                strokeWidth: 4,
                radius: 32,
                sides: 5
              })),
                this.superInit(t),
                this.setBoundingType('circle'),
                (this.sides = t.sides)
            },
            prerender: function(t) {
              t.polygon(0, 0, this.radius, this.sides)
            },
            _defined: function() {
              s.display.Shape.watchRenderProperty.call(this, 'sides')
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.display.HeartShape', {
            superClass: 'phina.display.Shape',
            init: function(t) {
              ;(t = {}.$safe(t, {
                backgroundColor: 'transparent',
                fill: 'pink',
                stroke: '#aaa',
                strokeWidth: 4,
                radius: 32,
                cornerAngle: 45
              })),
                this.superInit(t),
                this.setBoundingType('circle'),
                (this.cornerAngle = t.cornerAngle)
            },
            prerender: function(t) {
              t.heart(0, 0, this.radius, this.cornerAngle)
            },
            _defined: function() {
              s.display.Shape.watchRenderProperty.call(this, 'cornerAngle')
            }
          })
        }),
        s.namespace(function() {
          var t = s.define('phina.display.PathShape', {
            superClass: 'phina.display.Shape',
            paths: null,
            init: function(e) {
              ;(e = {}.$safe(e || {}, t.defaults)),
                this.superInit(e),
                (this.paths = e.paths || []),
                (this.lineJoin = e.lineJoin),
                (this.lineCap = e.lineCap)
            },
            setPaths: function(t) {
              return (this.paths = t), (this._dirtyDraw = !0), this
            },
            clear: function() {
              return (this.paths.length = 0), (this._dirtyDraw = !0), this
            },
            addPaths: function(t) {
              return [].push.apply(this.paths, t), (this._dirtyDraw = !0), this
            },
            addPath: function(t, e) {
              return (
                this.paths.push(s.geom.Vector2(t, e)),
                (this._dirtyDraw = !0),
                this
              )
            },
            getPath: function(t) {
              return this.paths[t]
            },
            getPaths: function() {
              return this.paths
            },
            changePath: function(t, e, i) {
              return this.paths[t].set(e, i), (this._dirtyDraw = !0), this
            },
            calcCanvasSize: function() {
              var t = this.paths
              if (0 === t.length)
                return {width: 2 * this.padding, height: 2 * this.padding}
              for (
                var e = -1 / 0,
                  i = -1 / 0,
                  n = 1 / 0,
                  s = 1 / 0,
                  r = 0,
                  o = t.length;
                r < o;
                ++r
              ) {
                var a = t[r]
                e < a.x && (e = a.x),
                  n > a.x && (n = a.x),
                  i < a.y && (i = a.y),
                  s > a.y && (s = a.y)
              }
              return {
                width:
                  2 * Math.max(Math.abs(e), Math.abs(n)) + 2 * this.padding,
                height:
                  2 * Math.max(Math.abs(i), Math.abs(s)) + 2 * this.padding
              }
            },
            calcCanvasWidth: function() {
              return this.calcCanvasSize().width
            },
            calcCanvasHeight: function() {
              return this.calcCanvasSize().height
            },
            prerender: function(t) {
              ;(t.lineCap = this.lineCap), (t.lineJoin = this.lineJoin)
              var e = this.paths
              if (e.length > 1) {
                var i = t.context,
                  n = e[0]
                i.beginPath(), i.moveTo(n.x, n.y)
                for (var s = 1, r = e.length; s < r; ++s)
                  (n = e[s]), i.lineTo(n.x, n.y)
              }
            },
            _defined: function() {
              s.display.Shape.watchRenderProperties.call(this, [
                'lineCap',
                'lineJoin'
              ])
            },
            _static: {
              defaults: {
                fill: !1,
                backgroundColor: 'transparent',
                lineCap: 'round',
                lineJoin: 'round'
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.display.Sprite', {
            superClass: 'phina.display.DisplayElement',
            init: function(t, e, i) {
              this.superInit(),
                (this.srcRect = s.geom.Rect()),
                this.setImage(t, e, i)
            },
            draw: function(t) {
              var e = this.image.domElement,
                i = this.srcRect
              t.context.drawImage(
                e,
                i.x,
                i.y,
                i.width,
                i.height,
                -this._width * this.originX,
                -this._height * this.originY,
                this._width,
                this._height
              )
            },
            setImage: function(t, e, i) {
              return (
                'string' == typeof t &&
                  (t = s.asset.AssetManager.get('image', t)),
                (this._image = t),
                (this.width = this._image.domElement.width),
                (this.height = this._image.domElement.height),
                e && (this.width = e),
                i && (this.height = i),
                (this.frameIndex = 0),
                this
              )
            },
            setFrameIndex: function(t, e, i) {
              var n = e || this._width,
                s = i || this._height,
                r = ~~(this.image.domElement.width / n),
                o = (t %= r * ~~(this.image.domElement.height / s)) % r,
                a = ~~(t / r)
              return (
                (this.srcRect.x = o * n),
                (this.srcRect.y = a * s),
                (this.srcRect.width = n),
                (this.srcRect.height = s),
                (this._frameIndex = t),
                this
              )
            },
            _accessor: {
              image: {
                get: function() {
                  return this._image
                },
                set: function(t) {
                  return this.setImage(t), this
                }
              },
              frameIndex: {
                get: function() {
                  return this._frameIndex
                },
                set: function(t) {
                  return this.setFrameIndex(t), this
                }
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.display.Label', {
            superClass: 'phina.display.Shape',
            init: function(t) {
              ;(t =
                'object' != typeof arguments[0]
                  ? {text: arguments[0]}
                  : arguments[0]),
                (t = {}.$safe(t, s.display.Label.defaults)),
                this.superInit(t),
                (this.text = t.text),
                (this.fontSize = t.fontSize),
                (this.fontWeight = t.fontWeight),
                (this.fontFamily = t.fontFamily),
                (this.align = t.align),
                (this.baseline = t.baseline),
                (this.lineHeight = t.lineHeight)
            },
            calcCanvasWidth: function() {
              var t = 0,
                e = this.canvas
              return (
                (e.context.font = this.font),
                this._lines.forEach(function(i) {
                  var n = e.context.measureText(i).width
                  t < n && (t = n)
                }, this),
                'center' !== this.align && (t *= 2),
                t + 2 * this.padding
              )
            },
            calcCanvasHeight: function() {
              var t = this.fontSize * this._lines.length
              return (
                'middle' !== this.baseline && (t *= 2),
                t * this.lineHeight + 2 * this.padding
              )
            },
            prerender: function(t) {
              var e = t.context
              ;(e.font = this.font),
                (e.textAlign = this.align),
                (e.textBaseline = this.baseline)
              var i = this._lines
              ;(this.lineSize = this.fontSize * this.lineHeight),
                (this._offset = -Math.floor(i.length / 2) * this.lineSize),
                (this._offset += ((i.length + 1) % 2) * (this.lineSize / 2))
            },
            renderFill: function(t) {
              var e = t.context
              this._lines.forEach(function(t, i) {
                e.fillText(t, 0, i * this.lineSize + this._offset)
              }, this)
            },
            renderStroke: function(t) {
              var e = t.context
              this._lines.forEach(function(t, i) {
                e.strokeText(t, 0, i * this.lineSize + this._offset)
              }, this)
            },
            _accessor: {
              text: {
                get: function() {
                  return this._text
                },
                set: function(t) {
                  ;(this._text = t),
                    (this._lines = (this.text + '').split('\n'))
                }
              },
              font: {
                get: function() {
                  return '{fontWeight} {fontSize}px {fontFamily}'.format(this)
                }
              }
            },
            _static: {
              defaults: {
                backgroundColor: 'transparent',
                fill: 'black',
                stroke: null,
                strokeWidth: 2,
                text: 'Hello, world!',
                fontSize: 32,
                fontWeight: '',
                fontFamily: "'HiraKakuProN-W3'",
                align: 'center',
                baseline: 'middle',
                lineHeight: 1.2
              }
            },
            _defined: function() {
              var t = s.display.Shape
              t.watchRenderProperty.call(this, 'text'),
                t.watchRenderProperty.call(this, 'fontSize'),
                t.watchRenderProperty.call(this, 'fontWeight'),
                t.watchRenderProperty.call(this, 'fontFamily'),
                t.watchRenderProperty.call(this, 'align'),
                t.watchRenderProperty.call(this, 'baseline'),
                t.watchRenderProperty.call(this, 'lineHeight')
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.display.DisplayScene', {
            superClass: 'phina.app.Scene',
            init: function(t) {
              this.superInit(),
                (t = {}.$safe(t, s.display.DisplayScene.defaults)),
                (this.canvas = s.graphics.Canvas()),
                this.canvas.setSize(t.width, t.height),
                (this.renderer = s.display.CanvasRenderer(this.canvas)),
                (this.backgroundColor = t.backgroundColor
                  ? t.backgroundColor
                  : null),
                (this.width = t.width),
                (this.height = t.height),
                (this.gridX = s.util.Grid(t.width, 16)),
                (this.gridY = s.util.Grid(t.height, 16)),
                (this.interactive = !0),
                (this.setInteractive = function(t) {
                  this.interactive = t
                }),
                (this._overFlags = {}),
                (this._touchFlags = {})
            },
            hitTest: function() {
              return !0
            },
            _update: function() {
              this.update && this.update()
            },
            _render: function() {
              this.renderer.render(this)
            },
            _static: {defaults: {width: 640, height: 960}}
          })
        }),
        s.namespace(function() {
          s.define('phina.display.Layer', {
            superClass: 'phina.display.DisplayElement',
            renderChildBySelf: !0,
            init: function(t) {
              ;(t = {}.$safe(t, {width: 640, height: 960})),
                this.superInit(t),
                (this.width = t.width),
                (this.height = t.height),
                (this.gridX = s.util.Grid(t.width, 16)),
                (this.gridY = s.util.Grid(t.height, 16))
            },
            draw: function(t) {
              if (this.domElement) {
                var e = this.domElement
                t.context.drawImage(
                  e,
                  0,
                  0,
                  e.width,
                  e.height,
                  -this.width * this.originX,
                  -this.height * this.originY,
                  this.width,
                  this.height
                )
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.display.CanvasLayer', {
            superClass: 'phina.display.Layer',
            init: function(t) {
              this.superInit(t),
                (this.canvas = s.graphics.Canvas()),
                (this.canvas.width = this.width),
                (this.canvas.height = this.height),
                (this.renderer = s.display.CanvasRenderer(this.canvas)),
                (this.domElement = this.canvas.domElement),
                this.on('enterframe', function() {
                  var t = this._worldMatrix
                  ;(this._worldMatrix = null),
                    this.renderer.render(this),
                    (this._worldMatrix = t)
                })
            },
            draw: function(t) {
              var e = this.domElement
              t.context.drawImage(
                e,
                0,
                0,
                e.width,
                e.height,
                -this.width * this.originX,
                -this.height * this.originY,
                this.width,
                this.height
              )
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.display.ThreeLayer', {
            superClass: 'phina.display.Layer',
            scene: null,
            camera: null,
            light: null,
            renderer: null,
            init: function(t) {
              this.superInit(t),
                (this.scene = new THREE.Scene()),
                (this.camera = new THREE.PerspectiveCamera(
                  75,
                  t.width / t.height,
                  1,
                  1e4
                )),
                (this.camera.position.z = 1e3),
                (this.light = new THREE.DirectionalLight(16777215, 1)),
                this.light.position.set(1, 1, 1).normalize(),
                this.scene.add(this.light),
                (this.renderer = new THREE.WebGLRenderer()),
                this.renderer.setClearColor(15790320),
                this.renderer.setSize(t.width, t.height),
                this.on('enterframe', function() {
                  this.renderer.render(this.scene, this.camera)
                }),
                (this.domElement = this.renderer.domElement)
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.display.CanvasRenderer', {
            init: function(t) {
              ;(this.canvas = t), (this._context = this.canvas.context)
            },
            render: function(t) {
              this.canvas.clear(),
                t.backgroundColor && this.canvas.clearColor(t.backgroundColor),
                this._context.save(),
                this.renderChildren(t),
                this._context.restore()
            },
            renderChildren: function(t) {
              if (t.children.length > 0)
                for (
                  var e = t.children.slice(), i = 0, n = e.length;
                  i < n;
                  ++i
                )
                  this.renderObject(e[i])
            },
            renderObject: function(t) {
              if (
                (!1 !== t.visible || t.interactive) &&
                (t._calcWorldMatrix && t._calcWorldMatrix(), !1 !== t.visible)
              ) {
                t._calcWorldAlpha && t._calcWorldAlpha()
                var e = this.canvas.context
                if (
                  ((e.globalAlpha = t._worldAlpha),
                  (e.globalCompositeOperation = t.blendMode),
                  t._worldMatrix)
                ) {
                  var i = t._worldMatrix
                  e.setTransform(i.m00, i.m10, i.m01, i.m11, i.m02, i.m12)
                }
                if (t.clip) {
                  if (
                    (e.save(),
                    t.clip(this.canvas),
                    e.clip(),
                    t.draw && t.draw(this.canvas),
                    !1 === t.renderChildBySelf && t.children.length > 0)
                  )
                    for (
                      var n = 0, s = (r = t.children.slice()).length;
                      n < s;
                      ++n
                    )
                      this.renderObject(r[n])
                  e.restore()
                } else if (
                  (t.draw && t.draw(this.canvas),
                  !1 === t.renderChildBySelf && t.children.length > 0)
                ) {
                  var r
                  for (n = 0, s = (r = t.children.slice()).length; n < s; ++n)
                    this.renderObject(r[n])
                }
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.display.DomApp', {
            superClass: 'phina.app.BaseApp',
            domElement: null,
            init: function(t) {
              this.superInit(t),
                t.domElement
                  ? (this.domElement = t.domElement)
                  : t.query
                  ? (this.domElement = document.querySelector(t.query))
                  : console.assert('error'),
                void 0 !== t.fps && (this.fps = t.fps),
                'function' == typeof t.runner &&
                  (this.ticker.runner = t.runner),
                (this.mouse = s.input.Mouse(this.domElement)),
                (this.touch = s.input.Touch(this.domElement)),
                (this.touchList = s.input.TouchList(this.domElement, 5)),
                (this.keyboard = s.input.Keyboard(document)),
                (this.accelerometer = s.input.Accelerometer()),
                (this.pointer = this.touch),
                (this.pointers = this.touchList.touches),
                this.domElement.addEventListener(
                  'touchstart',
                  function() {
                    ;(this.pointer = this.touch),
                      (this.pointers = this.touchList.touches)
                  }.bind(this)
                ),
                this.domElement.addEventListener(
                  'mouseover',
                  function() {
                    ;(this.pointer = this.mouse), (this.pointers = [this.mouse])
                  }.bind(this)
                ),
                this.keyboard.on(
                  'keydown',
                  function(t) {
                    this.currentScene &&
                      this.currentScene.flare('keydown', {keyCode: t.keyCode})
                  }.bind(this)
                ),
                this.keyboard.on(
                  'keyup',
                  function(t) {
                    this.currentScene &&
                      this.currentScene.flare('keyup', {keyCode: t.keyCode})
                  }.bind(this)
                ),
                this.keyboard.on(
                  'keypress',
                  function(t) {
                    this.currentScene &&
                      this.currentScene.flare('keypress', {keyCode: t.keyCode})
                  }.bind(this)
                )
              var e = s.isMobile() ? 'touchend' : 'mouseup'
              this.domElement.addEventListener(e, this._checkClick.bind(this)),
                this.domElement.addEventListener('touchstart', function(t) {
                  t.stop()
                }),
                this.domElement.addEventListener('touchmove', function(t) {
                  t.stop()
                }),
                s.global.addEventListener(
                  'focus',
                  function() {
                    this.flare('focus'), this.currentScene.flare('focus')
                  }.bind(this),
                  !1
                ),
                s.global.addEventListener(
                  'blur',
                  function() {
                    this.flare('blur'), this.currentScene.flare('blur')
                  }.bind(this),
                  !1
                ),
                this.on('enterframe', function() {
                  this.mouse.update(),
                    this.touch.update(),
                    this.touchList.update(),
                    this.keyboard.update()
                })
            },
            _checkClick: function(t) {
              var e = function(t) {
                t.children.length > 0 &&
                  t.children.each(function(t) {
                    e(t)
                  }),
                  t._clicked && t.has('click') && t.flare('click'),
                  (t._clicked = !1)
              }
              e(this.currentScene)
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.display.CanvasApp', {
            superClass: 'phina.display.DomApp',
            init: function(t) {
              ;(t = (t || {}).$safe(s.display.CanvasApp.defaults)).query ||
                t.domElement ||
                ((t.domElement = document.createElement('canvas')),
                t.append && document.body.appendChild(t.domElement)),
                this.superInit(t),
                (this.gridX = s.util.Grid({
                  width: t.width,
                  columns: t.columns
                })),
                (this.gridY = s.util.Grid({
                  width: t.height,
                  columns: t.columns
                })),
                (this.canvas = s.graphics.Canvas(this.domElement)),
                this.canvas.setSize(t.width, t.height),
                (this.backgroundColor =
                  void 0 !== t.backgroundColor ? t.backgroundColor : 'white'),
                this.replaceScene(
                  s.display.DisplayScene({width: t.width, height: t.height})
                ),
                t.fit && this.fitScreen(),
                t.pixelated &&
                  (this.domElement.style.imageRendering = 'pixelated'),
                this.on('push', function() {
                  this.currentScene.canvas && this._draw()
                })
            },
            _draw: function() {
              this.backgroundColor
                ? this.canvas.clearColor(this.backgroundColor)
                : this.canvas.clear(),
                this.currentScene.canvas &&
                  (this.currentScene._render(),
                  this._scenes.each(function(t) {
                    var e = t.canvas
                    e &&
                      this.canvas.context.drawImage(
                        e.domElement,
                        0,
                        0,
                        e.width,
                        e.height
                      )
                  }, this))
            },
            fitScreen: function() {
              this.canvas.fitScreen()
            },
            _static: {
              defaults: {
                width: 640,
                height: 960,
                columns: 12,
                fit: !0,
                append: !0
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.effect.Wave', {
            superClass: 'phina.display.CircleShape',
            init: function(t) {
              ;(t = (t || {}).$safe({fill: 'white', stroke: !1})),
                this.superInit(t),
                s.accessory
                  .Tweener()
                  .attachTo(this)
                  .to({scaleX: 2, scaleY: 2, alpha: 0}, 500)
                  .call(function() {
                    this.remove()
                  }, this)
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.ui.Button', {
            superClass: 'phina.display.Shape',
            init: function(t) {
              ;(t = (t || {}).$safe(s.ui.Button.defaults)),
                this.superInit(t),
                (this.cornerRadius = t.cornerRadius),
                (this.text = t.text),
                (this.fontColor = t.fontColor),
                (this.fontSize = t.fontSize),
                (this.fontWeight = t.fontWeight),
                (this.fontFamily = t.fontFamily),
                this.setInteractive(!0),
                this.on('pointend', function() {
                  this.flare('push')
                })
            },
            prerender: function(t) {
              t.roundRect(
                -this.width / 2,
                -this.height / 2,
                this.width,
                this.height,
                this.cornerRadius
              )
            },
            postrender: function(t) {
              var e = t.context,
                i = '{fontWeight} {fontSize}px {fontFamily}'.format(this)
              ;(e.font = i),
                (e.textAlign = 'center'),
                (e.textBaseline = 'middle'),
                (e.fillStyle = this.fontColor),
                e.fillText(this.text, 0, 0)
            },
            _static: {
              defaults: {
                width: 200,
                height: 80,
                backgroundColor: 'transparent',
                fill: 'hsl(200, 80%, 60%)',
                stroke: null,
                cornerRadius: 8,
                text: 'Hello',
                fontColor: 'white',
                fontSize: 32,
                fontWeight: '',
                fontFamily: "'HiraKakuProN-W3'"
              }
            },
            _defined: function() {
              s.display.Shape.watchRenderProperty.call(this, 'cornerRadius'),
                s.display.Shape.watchRenderProperty.call(this, 'text'),
                s.display.Shape.watchRenderProperty.call(this, 'fontColor'),
                s.display.Shape.watchRenderProperty.call(this, 'fontSize'),
                s.display.Shape.watchRenderProperty.call(this, 'fontFamily')
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.ui.Gauge', {
            superClass: 'phina.display.Shape',
            init: function(t) {
              ;(t = {}.$safe(t || {}, s.ui.Gauge.defaults)),
                this.superInit(t),
                (this._value = void 0 !== t.value ? t.value : t.maxValue),
                (this.maxValue = t.maxValue),
                (this.gaugeColor = t.gaugeColor),
                (this.cornerRadius = t.cornerRadius),
                (this.visualValue = void 0 !== t.value ? t.value : t.maxValue),
                (this.animation = t.animation),
                (this.animationTime = 1e3)
            },
            isFull: function() {
              return this.value === this.maxValue
            },
            isEmpty: function() {
              return 0 === this.value
            },
            setValue: function(t) {
              if (((t = Math.clamp(t, 0, this.maxValue)), this.value !== t))
                if ((this.flare('change'), (this._value = t), this.animation)) {
                  var e =
                    (Math.abs(this.visualValue - t) / this.maxValue) *
                    this.animationTime
                  ;(this.tweener.ontween = function() {
                    this._dirtyDraw = !0
                  }.bind(this)),
                    this.tweener
                      .clear()
                      .to({visualValue: t}, e)
                      .call(function() {
                        this.flare('changed'),
                          this.isEmpty()
                            ? this.flare('empty')
                            : this.isFull() && this.flare('full')
                      }, this)
                } else
                  (this.visualValue = t),
                    this.flare('changed'),
                    this.isEmpty()
                      ? this.flare('empty')
                      : this.isFull() && this.flare('full')
            },
            getRate: function() {
              return this.visualValue / this.maxValue
            },
            prerender: function(t) {
              t.roundRect(
                -this.width / 2,
                -this.height / 2,
                this.width,
                this.height,
                this.cornerRadius
              )
            },
            postrender: function(t) {
              var e = this.getRate()
              ;(t.context.fillStyle = this.gaugeColor),
                t.context.save(),
                t.context.clip(),
                t.fillRect(
                  -this.width / 2,
                  -this.height / 2,
                  this.width * e,
                  this.height
                ),
                t.context.restore()
            },
            _accessor: {
              value: {
                get: function() {
                  return this._value
                },
                set: function(t) {
                  this.setValue(t)
                }
              }
            },
            _defined: function() {
              s.display.Shape.watchRenderProperty.call(this, 'value'),
                s.display.Shape.watchRenderProperty.call(this, 'maxValue'),
                s.display.Shape.watchRenderProperty.call(this, 'gaugeColor'),
                s.display.Shape.watchRenderProperty.call(this, 'cornerRadius')
            },
            _static: {
              defaults: {
                width: 256,
                height: 32,
                backgroundColor: 'transparent',
                fill: 'white',
                stroke: '#aaa',
                strokeWidth: 4,
                maxValue: 100,
                gaugeColor: '#44f',
                cornerRadius: 0,
                animation: !0
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.ui.CircleGauge', {
            superClass: 'phina.ui.Gauge',
            init: function(t) {
              ;(t = (t || {}).$safe({
                backgroundColor: 'transparent',
                fill: '#aaa',
                stroke: '#222',
                radius: 64,
                anticlockwise: !0,
                showPercentage: !1
              })),
                this.superInit(t),
                this.setBoundingType('circle'),
                (this.radius = t.radius),
                (this.anticlockwise = t.anticlockwise),
                (this.showPercentage = t.showPercentage)
            },
            prerender: function(t) {
              var e = this.getRate(),
                i = 2 * Math.PI * e
              ;(this.startAngle = 0),
                (this.endAngle = i),
                this.canvas.rotate(0.5 * -Math.PI),
                this.canvas.scale(1, -1)
            },
            renderFill: function(t) {
              t.fillPie(0, 0, this.radius, this.startAngle, this.endAngle)
            },
            renderStroke: function(t) {
              t.strokeArc(0, 0, this.radius, this.startAngle, this.endAngle)
            },
            postrender: function() {}
          })
        }),
        s.namespace(function() {
          var t = {},
            e = s.define('phina.ui.LabelArea', {
              superClass: 'phina.display.Label',
              _lineUpdate: !0,
              init: function(t) {
                ;(t = {}.$safe(t, e.defaults)),
                  this.superInit(t),
                  (this.verticalAlign = t.verticalAlign),
                  (this.scroll = t.scroll || s.geom.Vector2()),
                  (this.scrollX = t.scrollX),
                  (this.scrollY = t.scrollY)
              },
              calcCanvasWidth: function() {
                return this.width + 2 * this.padding
              },
              calcCanvasHeight: function() {
                return this.height + 2 * this.padding
              },
              getOffsetY: function() {
                return 'number' == typeof this.verticalAlign
                  ? this.verticalAlign
                  : e.verticalAlignToOffsetMap[this.verticalAlign] || 0
              },
              getOffsetX: function() {
                return e.alignToOffsetMap[this.align] || 0
              },
              getTextWidthCache: function() {
                return t[this.font] || (t[this.font] = {})
              },
              spliceLines: function(t) {
                var e = this.width,
                  i = this.canvas.context
                i.font = this.font
                var n = this.getTextWidthCache()
                this._text.each(function(t) {
                  n[t] || (n[t] = i.measureText(t).width)
                })
                var s = []
                return (
                  t.forEach(function(t) {
                    var i = '',
                      r = 0
                    t.each(function(t) {
                      var o = n[t]
                      r + o > e && (s.push(i), (i = ''), (r = 0)),
                        (i += t),
                        (r += o)
                    }),
                      s.push(i)
                  }),
                  s
                )
              },
              getLines: function() {
                if (!1 === this._lineUpdate) return this._lines
                this._lineUpdate = !1
                var t = (this.text + '').split('\n')
                return (
                  this.width < 1
                    ? (this._lines = t)
                    : (this._lines = this.spliceLines(t)),
                  this._lines
                )
              },
              prerender: function(t) {
                var e = t.context
                ;(e.font = this.font),
                  (e.textAlign = this.align),
                  (e.textBaseline = this.baseline)
                this.text
                var i = this.getLines(),
                  n = i.length,
                  s = this.width,
                  r = this.height,
                  o = this.fontSize * this.lineHeight,
                  a = this.getOffsetX() * s,
                  h = this.getOffsetY()
                0 === h
                  ? ((h = -Math.floor(n / 2) * o),
                    (h += ((n + 1) % 2) * (o / 2)))
                  : h < 0
                  ? (h *= r)
                  : (h = h * r - n * o + o),
                  (h -= this.scrollY),
                  (a -= this.scrollX)
                var u = ((h + r / 2) / -o) | 0
                u < 0 && (u = 0)
                var c = ((r / 2 - h + 2 * o) / o) | 0
                ;(i = i.filter(function(t, e) {
                  return u <= e && c > e
                })),
                  (this.lines = i),
                  (this.offsetX = a),
                  (this.offsetY = h),
                  (this.lineSize = o),
                  (this.start = u)
              },
              renderFill: function(t) {
                var e = t.context,
                  i = this.offsetX,
                  n = this.offsetY,
                  s = this.lineSize,
                  r = this.start
                this.lines.forEach(function(t, o) {
                  e.fillText(t, i, (r + o) * s + n)
                }, this)
              },
              renderStroke: function(t) {
                var e = t.context,
                  i = this.offsetX,
                  n = this.offsetY,
                  s = this.lineSize,
                  r = this.start
                this.lines.forEach(function(t, o) {
                  e.strokeText(t, i, (r + o) * s + n)
                }, this)
              },
              _accessor: {
                text: {
                  get: function() {
                    return this._text
                  },
                  set: function(t) {
                    this._text = t
                  }
                },
                scrollX: {
                  get: function() {
                    return this.scroll.x
                  },
                  set: function(t) {
                    this.scroll.x = t
                  }
                },
                scrollY: {
                  get: function() {
                    return this.scroll.y
                  },
                  set: function(t) {
                    this.scroll.y = t
                  }
                }
              },
              _static: {
                defaults: {
                  verticalAlign: 'top',
                  align: 'left',
                  baseline: 'top',
                  width: 320,
                  height: 320,
                  scrollX: 0,
                  scrollY: 0
                },
                alignToOffsetMap: {
                  start: -0.5,
                  left: -0.5,
                  center: 0,
                  end: 0.5,
                  right: 0.5
                },
                verticalAlignToOffsetMap: {
                  top: -0.5,
                  center: 0,
                  middle: 0,
                  bottom: 0.5
                }
              },
              _defined: function() {
                var t = function(t, e) {
                  !1 === this._lineUpdate && t !== e && (this._lineUpdate = !0)
                }
                ;[
                  'text',
                  'width',
                  'fontSize',
                  'fontWeight',
                  'fontFamily'
                ].forEach(function(e) {
                  this.$watch(e, t)
                }, this.prototype),
                  s.display.Shape.watchRenderProperties.call(this, [
                    'verticalAlign',
                    'text',
                    'scroll',
                    'scrollX',
                    'scrollY'
                  ])
              },
              enableScroll: function() {
                return this
              }
            })
        }),
        s.namespace(function() {
          s.define('phina.game.ManagerScene', {
            superClass: 'phina.app.Scene',
            init: function(t) {
              this.superInit(),
                this.setScenes(t.scenes),
                this.on(
                  'enter',
                  function() {
                    this.gotoScene(t.startLabel || 0)
                  }.bind(this)
                ),
                this.on('resume', this.onnext.bind(this)),
                (this.commonArguments = {})
            },
            setScenes: function(t) {
              return (this.scenes = t), (this.sceneIndex = 0), this
            },
            replaceScene: function(t, e) {
              var i = 'string' == typeof t ? this.labelToIndex(t) : t || 0,
                n = this.scenes[i]
              n ||
                console.error(
                  'phina.js error: `{0}` に対応するシーンがありません.'.format(
                    t
                  )
                )
              var r = s.using(n.className)
              'function' != typeof r &&
                (r = s.using('phina.game.' + n.className))
              var o = {}.$extend(n.arguments, e),
                a = r.call(null, o)
              return (
                a.nextLabel || (a.nextLabel = n.nextLabel),
                a.nextArguments || (a.nextArguments = n.nextArguments),
                this.app.replaceScene(a),
                (this.sceneIndex = i),
                this
              )
            },
            gotoScene: function(t, e) {
              var i = 'string' == typeof t ? this.labelToIndex(t) : t || 0,
                n = this.scenes[i]
              n ||
                console.error(
                  'phina.js error: `{0}` に対応するシーンがありません.'.format(
                    t
                  )
                )
              var r = s.using(n.className)
              'function' != typeof r &&
                (r = s.using('phina.game.' + n.className))
              var o = {}.$extend(n.arguments, e),
                a = r.call(null, o)
              return (
                a.nextLabel || (a.nextLabel = n.nextLabel),
                a.nextArguments || (a.nextArguments = n.nextArguments),
                this.app.pushScene(a),
                (this.sceneIndex = i),
                this
              )
            },
            gotoNext: function(t) {
              var e = this.scenes[this.sceneIndex],
                i = null
              return (
                e.nextLabel
                  ? (i = this.labelToIndex(e.nextLabel))
                  : this.sceneIndex + 1 < this.scenes.length &&
                    (i = this.sceneIndex + 1),
                null !== i ? this.gotoScene(i, t) : this.flare('finish'),
                this
              )
            },
            getCurrentIndex: function() {
              return this.sceneIndex
            },
            getCurrentLabel: function() {
              return this.scenes[this.sceneIndex].label
            },
            labelToIndex: function(t) {
              var e = this.scenes.filter(function(e) {
                return e.label == t
              })[0]
              return this.scenes.indexOf(e)
            },
            indexToLabel: function(t) {
              return this.scenes[t].label
            },
            onnext: function(t) {
              var e = t.prevScene.nextLabel,
                i = t.prevScene.nextArguments
              e ? this.gotoScene(e, i) : this.gotoNext(i)
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.game.SplashScene', {
            superClass: 'phina.display.DisplayScene',
            init: function(t) {
              var e = s.game.SplashScene.defaults
              this.superInit(t)
              var i = s.asset.Texture()
              i.load(e.imageURL).then(
                function() {
                  this._init()
                }.bind(this)
              ),
                (this.texture = i)
            },
            _init: function() {
              ;(this.sprite = s.display.Sprite(this.texture).addChildTo(this)),
                this.sprite.setPosition(
                  this.gridX.center(),
                  this.gridY.center()
                ),
                (this.sprite.alpha = 0),
                this.sprite.tweener
                  .clear()
                  .to({alpha: 1}, 500, 'easeOutCubic')
                  .wait(1e3)
                  .to({alpha: 0}, 500, 'easeOutCubic')
                  .wait(250)
                  .call(function() {
                    this.exit()
                  }, this)
            },
            _static: {
              defaults: {
                imageURL:
                  'http://cdn.rawgit.com/phi-jp/phina.js/develop/logo.png'
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.game.TitleScene', {
            superClass: 'phina.display.DisplayScene',
            init: function(t) {
              ;(t = {}.$safe(t, s.game.TitleScene.defaults)),
                this.superInit(t),
                (this.backgroundColor = t.backgroundColor),
                this.fromJSON({
                  children: {
                    titleLabel: {
                      className: 'phina.display.Label',
                      arguments: {
                        text: t.title,
                        fill: t.fontColor,
                        stroke: !1,
                        fontSize: 64
                      },
                      x: this.gridX.center(),
                      y: this.gridY.span(4)
                    }
                  }
                }),
                'touch' === t.exitType &&
                  (this.fromJSON({
                    children: {
                      touchLabel: {
                        className: 'phina.display.Label',
                        arguments: {
                          text: 'TOUCH START',
                          fill: t.fontColor,
                          stroke: !1,
                          fontSize: 32
                        },
                        x: this.gridX.center(),
                        y: this.gridY.span(12)
                      }
                    }
                  }),
                  this.on('pointend', function() {
                    this.exit()
                  }))
            },
            _static: {
              defaults: {
                title: 'phina.js games',
                message: '',
                fontColor: 'white',
                backgroundColor: 'hsl(200, 80%, 64%)',
                backgroundImage: '',
                exitType: 'touch'
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.game.ResultScene', {
            superClass: 'phina.display.DisplayScene',
            init: function(t) {
              ;(t = {}.$safe(t, s.game.ResultScene.defaults)), this.superInit(t)
              var e = t.message.format(t)
              ;(this.backgroundColor = t.backgroundColor),
                this.fromJSON({
                  children: {
                    scoreText: {
                      className: 'phina.display.Label',
                      arguments: {
                        text: 'score',
                        fill: t.fontColor,
                        stroke: null,
                        fontSize: 48
                      },
                      x: this.gridX.span(8),
                      y: this.gridY.span(4)
                    },
                    scoreLabel: {
                      className: 'phina.display.Label',
                      arguments: {
                        text: t.score + '',
                        fill: t.fontColor,
                        stroke: null,
                        fontSize: 72
                      },
                      x: this.gridX.span(8),
                      y: this.gridY.span(6)
                    },
                    messageLabel: {
                      className: 'phina.display.Label',
                      arguments: {
                        text: e,
                        fill: t.fontColor,
                        stroke: null,
                        fontSize: 32
                      },
                      x: this.gridX.center(),
                      y: this.gridY.span(9)
                    },
                    shareButton: {
                      className: 'phina.ui.Button',
                      arguments: [
                        {
                          text: '★',
                          width: 128,
                          height: 128,
                          fontColor: t.fontColor,
                          fontSize: 50,
                          cornerRadius: 64,
                          fill: 'rgba(240, 240, 240, 0.5)'
                        }
                      ],
                      x: this.gridX.center(-3),
                      y: this.gridY.span(12)
                    },
                    playButton: {
                      className: 'phina.ui.Button',
                      arguments: [
                        {
                          text: '▶',
                          width: 128,
                          height: 128,
                          fontColor: t.fontColor,
                          fontSize: 50,
                          cornerRadius: 64,
                          fill: 'rgba(240, 240, 240, 0.5)'
                        }
                      ],
                      x: this.gridX.center(3),
                      y: this.gridY.span(12),
                      interactive: !0,
                      onpush: function() {
                        this.exit()
                      }.bind(this)
                    }
                  }
                }),
                'touch' === t.exitType &&
                  this.on('pointend', function() {
                    this.exit()
                  }),
                (this.shareButton.onclick = function() {
                  var i = 'Score: {0}\n{1}'.format(t.score, e),
                    n = s.social.Twitter.createURL({
                      text: i,
                      hashtags: t.hashtags,
                      url: t.url
                    })
                  window.open(n, 'share window', 'width=480, height=320')
                })
            },
            _static: {
              defaults: {
                score: 16,
                message: 'this is phina.js project.',
                hashtags: 'phina_js,game,javascript',
                url: s.global.location && s.global.location.href,
                fontColor: 'white',
                backgroundColor: 'hsl(200, 80%, 64%)',
                backgroundImage: ''
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.game.LoadingScene', {
            superClass: 'phina.display.DisplayScene',
            init: function(t) {
              ;(t = {}.$safe(t, s.game.LoadingScene.defaults)),
                this.superInit(t),
                this.fromJSON({
                  children: {
                    gauge: {
                      className: 'phina.ui.Gauge',
                      arguments: {
                        value: 0,
                        width: this.width,
                        height: 12,
                        fill: '#aaa',
                        stroke: !1,
                        gaugeColor: 'hsla(200, 100%, 80%, 0.8)',
                        padding: 0
                      },
                      x: this.gridX.center(),
                      y: 0,
                      originY: 0
                    }
                  }
                })
              var e = s.asset.AssetLoader()
              t.lie
                ? ((this.gauge.animationTime = 1e4),
                  (this.gauge.value = 90),
                  (e.onload = function() {
                    ;(this.gauge.animationTime = 0), (this.gauge.value = 100)
                  }.bind(this)))
                : ((this.gauge.animationTime = 100),
                  (e.onprogress = function(t) {
                    this.gauge.value = 100 * t.progress
                  }.bind(this))),
                (this.gauge.onfull = function() {
                  'auto' === t.exitType && this.app.popScene(),
                    this.flare('loaded')
                }.bind(this)),
                e.load(t.assets)
            },
            _static: {defaults: {exitType: 'auto', lie: !1}}
          })
        }),
        s.namespace(function() {
          s.define('phina.game.CountScene', {
            superClass: 'phina.display.DisplayScene',
            init: function(t) {
              this.superInit(t),
                (t = (t || {}).$safe(s.game.CountScene.defaults)),
                (this.backgroundColor = t.backgroundColor),
                this.fromJSON({
                  children: {
                    label: {
                      className: 'phina.display.Label',
                      arguments: {
                        fill: t.fontColor,
                        fontSize: t.fontSize,
                        stroke: !1
                      },
                      x: this.gridX.center(),
                      y: this.gridY.center()
                    }
                  }
                }),
                t.count instanceof Array
                  ? (this.countList = t.count.reverse())
                  : (this.countList = Array.range(1, t.count + 1)),
                (this.counter = this.countList.length),
                (this.exitType = t.exitType),
                this._updateCount()
            },
            _updateCount: function() {
              this.counter
              var t = --this.counter
              ;(this.label.text = this.countList[t]),
                this.label.scale.set(1, 1),
                this.label.tweener
                  .clear()
                  .to({scaleX: 1, scaleY: 1, alpha: 1}, 250)
                  .wait(500)
                  .to({scaleX: 1.5, scaleY: 1.5, alpha: 0}, 250)
                  .call(function() {
                    this.counter <= 0
                      ? (this.flare('finish'),
                        'auto' === this.exitType && this.app.popScene())
                      : this._updateCount()
                  }, this)
            },
            _static: {
              defaults: {
                count: 3,
                width: 640,
                height: 960,
                fontColor: 'white',
                fontSize: 164,
                backgroundColor: 'rgba(50, 50, 50, 1)',
                exitType: 'auto'
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.game.PauseScene', {
            superClass: 'phina.display.DisplayScene',
            init: function(t) {
              ;(t = {}.$safe(t, s.game.PauseScene.defaults)),
                this.superInit(t),
                (this.backgroundColor = t.backgroundColor),
                this.fromJSON({
                  children: {
                    text: {
                      className: 'phina.display.Label',
                      arguments: {
                        text: 'Pause',
                        fill: t.fontColor,
                        stroke: null,
                        fontSize: 48
                      },
                      x: this.gridX.center(),
                      y: this.gridY.center()
                    }
                  }
                }),
                'touch' === t.exitType &&
                  this.on('pointend', function() {
                    this.exit()
                  })
            },
            _static: {
              defaults: {
                fontColor: 'white',
                backgroundColor: 'hsla(0, 0%, 0%, 0.85)',
                exitType: 'touch'
              }
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.game.GameApp', {
            superClass: 'phina.display.CanvasApp',
            init: function(t) {
              ;(t = (t || {}).$safe({startLabel: 'title'})), this.superInit(t)
              var e = t.startLabel || 'title',
                i = t.scenes || [
                  {
                    className: 'SplashScene',
                    label: 'splash',
                    nextLabel: 'title'
                  },
                  {className: 'TitleScene', label: 'title', nextLabel: 'main'},
                  {className: 'MainScene', label: 'main', nextLabel: 'result'},
                  {
                    className: 'ResultScene',
                    label: 'result',
                    nextLabel: 'title'
                  }
                ]
              i = i.each(function(e) {
                e.arguments = e.arguments || t
              })
              var n = s.game.ManagerScene({startLabel: e, scenes: i})
              if (t.assets) {
                var r = {}.$extend(t, {exitType: ''}),
                  o = (s.global.LoadingScene || s.game.LoadingScene)(r)
                this.replaceScene(o),
                  (o.onloaded = function() {
                    this.replaceScene(n), t.debug && this._enableDebugger()
                  }.bind(this))
              } else this.replaceScene(n), t.debug && this._enableDebugger()
              t.autoPause &&
                this.on('blur', function() {
                  var t = s.game.PauseScene()
                  this.pushScene(t)
                })
            },
            _enableDebugger: function() {
              this.gui ||
                this.enableDatGUI(
                  function(t) {
                    var e = t.addFolder('scenes'),
                      i = {}
                    this.rootScene.scenes.each(function(t) {
                      return (
                        (i[t.label] = function() {
                          this.rootScene.replaceScene(t.label),
                            console.log(this._scenes.length)
                        }.bind(this)),
                        t
                      )
                    }, this),
                      i.forIn(function(t, n) {
                        e.add(i, t)
                      }),
                      e.open(),
                      (this.gui = t)
                  }.bind(this)
                )
            }
          })
        }),
        s.namespace(function() {
          s.define('phina.social.Twitter', {
            init: function() {},
            _static: {
              baseURL: 'https://twitter.com/intent',
              defaults: {
                text: 'Hello, world!',
                hashtags: 'javascript,phina_js',
                url: s.global.location && s.global.location.href
              },
              createURL: function(t) {
                t = (t || {}).$safe(this.defaults)
                var e = [],
                  i = encodeURIComponent
                return (
                  t.forIn(function(t, n) {
                    var s = t + '=' + i(n)
                    e.push(s)
                  }),
                  '{baseURL}/{type}?{query}'.format({
                    baseURL: this.baseURL,
                    type: 'tweet',
                    query: e.join('&')
                  })
                )
              }
            }
          })
        }),
        s.namespace(function() {
          if (s.global.Box2D) {
            s.box2d = {
              b2: {
                Vec2: Box2D.Common.Math.b2Vec2,
                AABB: Box2D.Collision.b2AABB,
                BodyDef: Box2D.Dynamics.b2BodyDef,
                Body: Box2D.Dynamics.b2Body,
                FixtureDef: Box2D.Dynamics.b2FixtureDef,
                Fixture: Box2D.Dynamics.b2Fixture,
                World: Box2D.Dynamics.b2World,
                MassData: Box2D.Collision.Shapes.b2MassData,
                PolygonShape: Box2D.Collision.Shapes.b2PolygonShape,
                CircleShape: Box2D.Collision.Shapes.b2CircleShape,
                DebugDraw: Box2D.Dynamics.b2DebugDraw,
                MouseJointDef: Box2D.Dynamics.Joints.b2MouseJointDef
              }
            }
            var t = s.box2d.b2
            s.define('phina.box2d.Box2dLayer', {
              superClass: 'phina.display.CanvasLayer',
              init: function(e) {
                this.superInit(e), (e = (e || {}).$safe({worldScale: 50}))
                var i = new t.Vec2(0, 9.8),
                  n = new t.World(i, !0)
                ;(this.world = n),
                  (this.world._scale = e.worldScale),
                  this._setupDebugDraw()
              },
              _setupDebugDraw: function() {
                var e = new t.DebugDraw()
                e.SetSprite(this.canvas.context),
                  e.SetDrawScale(this.world._scale),
                  e.SetLineThickness(1),
                  e.SetAlpha(1),
                  e.SetFillAlpha(0.4),
                  e.SetFlags(t.DebugDraw.e_shapeBit),
                  this.world.SetDebugDraw(e)
              },
              createBody: function(t) {
                return (t.world = this.world), s.box2d.Box2dBody(t)
              },
              update: function(t) {
                var e = t.ticker.deltaTime / 1e3
                this.world.Step(e, 10, 10)
              },
              draw: function(t) {
                this.world.ClearForces(), this.world.DrawDebugData()
                var e = this.canvas.domElement
                t.context.drawImage(e, 0, 0, e.width, e.height)
              }
            })
          }
        }),
        s.namespace(function() {
          if (s.global.Box2D) {
            var t = s.box2d.b2
            s.define('phina.box2d.Box2dBody', {
              superClass: 'phina.accessory.Accessory',
              init: function(e) {
                this.superInit(),
                  (this.world = e.world),
                  (this.type = e.type),
                  (this.shape = e.shape),
                  this._init(),
                  this.on('attached', function() {
                    var e = this.target,
                      i = new t.Vec2(
                        e.x / this.world._scale,
                        e.y / this.world._scale
                      )
                    this.body.SetPosition(i),
                      this.body.SetAngle((e.rotation * Math.PI) / 180),
                      this._bindFixture(this.target)
                  })
              },
              update: function(t) {
                var e = this.target
                ;(e.x = this.body.GetPosition().x * this.world._scale),
                  (e.y = this.body.GetPosition().y * this.world._scale),
                  (e.rotation = (180 * this.body.GetAngle()) / Math.PI)
              },
              _init: function() {
                return this._setupBody(), this
              },
              _setupBody: function() {
                var e = this,
                  i = this.world,
                  n = (i._scale, new t.BodyDef())
                ;(n.type = {
                  dynamic: t.Body.b2_dynamicBody,
                  kinematic: t.Body.b2_kinematicBody,
                  static: t.Body.b2_staticBody
                }[e.type || 'dynamic']),
                  n.position.Set(0, 0)
                var s = i.CreateBody(n)
                return (this.body = s), this
              },
              _bindFixture: function() {
                var e = this,
                  i = this.target
                ;(n = this.body.GetFixtureList()) && this.body.DestroyFixture(n)
                var n,
                  s = this.world._scale,
                  r = (function() {
                    var n = null
                    return (
                      'circle' === e.shape
                        ? (n = new t.CircleShape(i.radius / s))
                        : 'box' === e.shape
                        ? (n = new t.PolygonShape()).SetAsBox(
                            i.width / s / 2,
                            i.height / s / 2
                          )
                        : (n = new t.CircleShape(32 / s)),
                      n
                    )
                  })()
                ;((n = new t.FixtureDef()).shape = r),
                  (n.density = 1),
                  (n.friction = 0.3),
                  (n.restitution = 0.5),
                  this.body.CreateFixture(n)
              }
            })
          }
        }),
        s.namespace(function() {
          s.define('phina.display.CanvasElement', {
            superClass: 'phina.display.DisplayElement',
            init: function(t) {
              this.superInit(t),
                console.warn(
                  '[phina warn] CanvasElement は非推奨になりました. DisplayElement をお使いください.'
                )
            }
          }),
            s.define('phina.display.CanvasScene', {
              superClass: 'phina.display.DisplayScene',
              init: function(t) {
                this.superInit(t),
                  console.warn(
                    '[phina warn] CanvasScene は非推奨になりました. DisplayScene をお使いください.'
                  )
              }
            })
        })
    }.call(this, i(2)))
  },
  function(t, e) {
    var i
    i = (function() {
      return this
    })()
    try {
      i = i || new Function('return this')()
    } catch (t) {
      'object' == typeof window && (i = window)
    }
    t.exports = i
  },
  function(t, e, i) {
    var n = {'./scene1': [0, 0], './scene1.js': [0, 0]}
    function s(t) {
      if (!i.o(n, t))
        return Promise.resolve().then(function() {
          var e = new Error("Cannot find module '" + t + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        })
      var e = n[t],
        s = e[0]
      return i.e(e[1]).then(function() {
        return i(s)
      })
    }
    ;(s.keys = function() {
      return Object.keys(n)
    }),
      (s.id = 3),
      (t.exports = s)
  },
  function(t, e, i) {
    'use strict'
    i.r(e)
    var n = [{label: 'scene1', className: 'scene1'}]
    i(1)
    phina.globalize(),
      n.forEach(t => {
        i(3)('./' + t.label).then(e => phina.define(t.label, e.default))
      })
    const s = {
      startLabel: 'scene1',
      assets: {
        font: {},
        image: {'note.png': '/assets/image/note.png'},
        sound: {}
      },
      height: 200,
      width: 500,
      scenes: n
    }
    phina.main(() => GameApp(s).run())
  }
])
