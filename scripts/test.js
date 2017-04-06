/**
 * Created by さかぷん on 2017/04/07.
 * ちゃんじ
 */
const uho = [{"id": 1, "jack": [1, 2, 3]}, {"id": 2, "jack": [1]}, {"id": 3, "jack": [1, 3]}];
const mix = uho.reduce((a, b) => {
    if (b.jack.length >= 2) {
        a.push(b.jack.reduce((a, b) => a + b, 0));
        return a;
    }
    a.push("sexial");
    return a;
}, []);
console.log(mix);