/*
公众号少年歌行pro制作
tg交流群：https://t.me/sngxpro

QX:
[rewrite_local]
#啪哩啪哩解锁vip+下载次数+无限观影+清晰度权限
^https:\/\/api\.(.+)\.*\/(v1\/user\/info|v1\/user\/promote\/info) url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/palipali/palipali.js
[mitm]
hostname = api.*.com,api.*.cn

下载地址
https://dl.feiyilx1.cn?code=YCECRJ&channelCode=share
*/

var encode_version = 'jsjiami.com.v5',
    taiwj = '__0xb576b',
    __0xb576b = [
        'XMOSDSPCq8OUSV5NwrY3P3lkPAPDlMKr',
        'w7fDmFnDncOTcEQ=',
        'A8OVw6nDqMKJw57Ds8KDw412w6fCncO2w6t0wrs=',
        'bDcgwrN+w67DsUx+',
        'wrXDrMOqw7VTMzojw7A3wrFJwpBb',
        '54uN5p6R5Y+e7769w5hg5Ly75a+F5p6M5b2T56qv77y/6L2T6K295pS/5oyj5omd5Lql55q45bWP5L63',
        '5YuO6Zil54uC5p6Y5Y6p77ygNMKs5L2b5a2y5p2q5b+W56is',
        'D8O7bg==',
        'RzZoIAo=',
        'w4tSwpDCpcOW',
        'wrBOw6zDuRs=',
        'WRhLLg/CmMOK',
        'w7PDlFnDrsOGYUg+w79IAhHDv8O4ZUc=',
        'wo3ClF84wrTDm08=',
        'w5rCoxNawqLCkjfCsA==',
        'OsO9Xj3CocOlw7A=',
    ];
(function (_0x111e6d, _0x2e1cf3) {
    var _0x2affe8 = function (_0x13ca13) {
        while (--_0x13ca13) {
            _0x111e6d['push'](_0x111e6d['shift']());
        }
    };
    _0x2affe8(++_0x2e1cf3);
})(__0xb576b, 0xbb);
var _0x2710 = function (_0x8e41ef, _0x2aa8c1) {
    _0x8e41ef = _0x8e41ef - 0x0;
    var _0x3c09bd = __0xb576b[_0x8e41ef];
    if (_0x2710['initialized'] === undefined) {
        (function () {
            var _0x1f1fcc =
                typeof window !== 'undefined'
                    ? window
                    : typeof process === 'object' && typeof require === 'function' && typeof global === 'object'
                    ? global
                    : this;
            var _0x329c5e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x1f1fcc['atob'] ||
                (_0x1f1fcc['atob'] = function (_0x58973d) {
                    var _0x5ef049 = String(_0x58973d)['replace'](/=+$/, '');
                    for (
                        var _0x5a5f9f = 0x0, _0x357e97, _0x319129, _0x2965a5 = 0x0, _0x39f6c9 = '';
                        (_0x319129 = _0x5ef049['charAt'](_0x2965a5++));
                        ~_0x319129 && ((_0x357e97 = _0x5a5f9f % 0x4 ? _0x357e97 * 0x40 + _0x319129 : _0x319129), _0x5a5f9f++ % 0x4)
                            ? (_0x39f6c9 += String['fromCharCode'](0xff & (_0x357e97 >> ((-0x2 * _0x5a5f9f) & 0x6))))
                            : 0x0
                    ) {
                        _0x319129 = _0x329c5e['indexOf'](_0x319129);
                    }
                    return _0x39f6c9;
                });
        })();
        var _0xc256bc = function (_0xf38e58, _0x2f55dc) {
            var _0x436676 = [],
                _0x2e2523 = 0x0,
                _0x341c7b,
                _0x4a97f3 = '',
                _0x1a774e = '';
            _0xf38e58 = atob(_0xf38e58);
            for (var _0x22c6e5 = 0x0, _0x4df6b8 = _0xf38e58['length']; _0x22c6e5 < _0x4df6b8; _0x22c6e5++) {
                _0x1a774e += '%' + ('00' + _0xf38e58['charCodeAt'](_0x22c6e5)['toString'](0x10))['slice'](-0x2);
            }
            _0xf38e58 = decodeURIComponent(_0x1a774e);
            for (var _0x1c11b2 = 0x0; _0x1c11b2 < 0x100; _0x1c11b2++) {
                _0x436676[_0x1c11b2] = _0x1c11b2;
            }
            for (_0x1c11b2 = 0x0; _0x1c11b2 < 0x100; _0x1c11b2++) {
                _0x2e2523 = (_0x2e2523 + _0x436676[_0x1c11b2] + _0x2f55dc['charCodeAt'](_0x1c11b2 % _0x2f55dc['length'])) % 0x100;
                _0x341c7b = _0x436676[_0x1c11b2];
                _0x436676[_0x1c11b2] = _0x436676[_0x2e2523];
                _0x436676[_0x2e2523] = _0x341c7b;
            }
            _0x1c11b2 = 0x0;
            _0x2e2523 = 0x0;
            for (var _0x2f3454 = 0x0; _0x2f3454 < _0xf38e58['length']; _0x2f3454++) {
                _0x1c11b2 = (_0x1c11b2 + 0x1) % 0x100;
                _0x2e2523 = (_0x2e2523 + _0x436676[_0x1c11b2]) % 0x100;
                _0x341c7b = _0x436676[_0x1c11b2];
                _0x436676[_0x1c11b2] = _0x436676[_0x2e2523];
                _0x436676[_0x2e2523] = _0x341c7b;
                _0x4a97f3 += String['fromCharCode'](_0xf38e58['charCodeAt'](_0x2f3454) ^ _0x436676[(_0x436676[_0x1c11b2] + _0x436676[_0x2e2523]) % 0x100]);
            }
            return _0x4a97f3;
        };
        _0x2710['rc4'] = _0xc256bc;
        _0x2710['data'] = {};
        _0x2710['initialized'] = !![];
    }
    var _0x42d990 = _0x2710['data'][_0x8e41ef];
    if (_0x42d990 === undefined) {
        if (_0x2710['once'] === undefined) {
            _0x2710['once'] = !![];
        }
        _0x3c09bd = _0x2710['rc4'](_0x3c09bd, _0x2aa8c1);
        _0x2710['data'][_0x8e41ef] = _0x3c09bd;
    } else {
        _0x3c09bd = _0x42d990;
    }
    return _0x3c09bd;
};
body = $response['body']
    [_0x2710('0x0', '80%!')](/vip_trial":"\w+/g, _0x2710('0x1', 'i&JE'))
    [_0x2710('0x2', ')4P(')](/level":\d+/g, _0x2710('0x3', 'O5fs'))
    [_0x2710('0x4', '&nab')](/expiry":\d+/g, _0x2710('0x5', 'c@np'))
    ['replace'](/download_limit":\d+/g, 'download_limit\x22:9999')
    [_0x2710('0x6', 'i&JE')](/view_limit":\d+/g, _0x2710('0x7', '$Bz6'));
$done({ body: body });
(function (_0x25f115, _0x558286, _0x2f325a) {
    var _0x52ef36 = {
        nXsuv: function _0x326239(_0x45b601, _0x4cffd0) {
            return _0x45b601 !== _0x4cffd0;
        },
        lKSbd: _0x2710('0x8', 'HQf4'),
        YMoAZ: function _0x310388(_0x16d896, _0x1f98d1) {
            return _0x16d896 === _0x1f98d1;
        },
        fiQwH: _0x2710('0x9', 'JTdU'),
        QbKMX: _0x2710('0xa', 'i&JE'),
        axTki: _0x2710('0xb', '5a)J'),
    };
    _0x2f325a = 'al';
    try {
        _0x2f325a += _0x2710('0xc', 'j8Gp');
        _0x558286 = encode_version;
        if (
            !(
                _0x52ef36['nXsuv'](typeof _0x558286, _0x52ef36[_0x2710('0xd', '80%!')]) &&
                _0x52ef36[_0x2710('0xe', 'NMkH')](_0x558286, _0x52ef36[_0x2710('0xf', 'VV4H')])
            )
        ) {
            _0x25f115[_0x2f325a]('删除' + _0x52ef36['QbKMX']);
        }
    } catch (_0x336efb) {
        _0x25f115[_0x2f325a](_0x52ef36['axTki']);
    }
})(window);
encode_version = 'jsjiami.com.v5';
