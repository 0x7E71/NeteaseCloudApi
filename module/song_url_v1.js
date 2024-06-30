// 歌曲链接 - v1
// 此版本不再采用 br 作为音质区分的标准
// 而是采用 standard, exhigh, lossless, hires, jyeffect(高清环绕声), sky(沉浸环绕声), jymaster(超清母带) 进行音质判断

const createOption = require('../util/option.js')

module.exports = (query, request) => {
  const data = {
    ids: '[' + query.id + ']',
    level: query.level,
    encodeType: 'flac',
  }
  if (data.level == 'sky') {
    data.immerseType = 'c51'
  }
  const options = createOption(query);
  request(
    'POST',
    `/api/song/enhance/player/url/v1`,
    data,
    options,
  )
  // **强制替换 cookie**
  const newCookie = '_ga=GA1.1.2118325875.1688024288; Hm_lvt_6b8941338e0f095537972acf80ce49ce=1708331355,1708506234,1708687147; MUSIC_U=00A5A8F6F55709E510C69B3CED39F1F35D65F7F27DAAF37ACB9242391B3F277853AC76519325A69A58FB9D9EA323C8CDB4A3EEDDE24DA39CF8ED4DC5FD109AD961EECB6393448E57AFCAA7A989B7A612117CF22FF5DF0BBDD61099B670B0A2B66DE1C88D8AD77913DE29E4C86799510DB7730A6A0C018AF1C67ED077225F210353892C5F918122AEE056222F9AB33EFE718914D3B60952EF073B59FC21414C45B48D8988364B1E89F517E19E2C9BBCEB353C17118F0386F533DEEB0A24B53F6F5BC6567542AD8675F207FA1E4670654A71A8A6460B9796A5DC68EA8E59D886C4D9A0A4EC70DD9245FB6378B7E477FE549710C012BFA12C57B7A19C0684016874E7CCDBAD3D88C449DD48C8D68BC84F3A3FCD816770B7AA237D756A857880EDF69A9DAB76CCF138C2498602ECF3A5D144C19CB03DC124CEDBCF81ACB6C6C9AA8C4D1EF05723AD3B71E0C5E49D534AE1618C370326136B9BAEA3ABCC775FC0F611A942641D4B957ED4A8189BF7815B4BA386DA79A53BB5488BBC487EF2E12886FC86; NMTID=00Oj-FBvFn26RsxnUEijbFpVkCNRpoAAAGQZ7CRgg; _ga_KMJJCFZDKF=GS1.1.1719726543.256.0.1719726543.0.0.0'; // 将 '你的目标cookie值' 替换成你想要设置的 cookie 值
  options.cookie = newCookie; 
  return request(
    'POST',
    `/api/song/enhance/player/url/v1`,
    data,
    options, // 使用修改后的 options
  )
}

