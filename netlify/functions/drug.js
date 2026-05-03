exports.handler = async (event) => {
  const name = event.queryStringParameters?.name || '';
  const API_KEY = '1c109377f9b62c2048b8ed97dec57cb1ceabf944ca88e3a9e8dbef952e37e39';
  const url = `https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=${API_KEY}&itemName=${encodeURIComponent(name)}&type=json&numOfRows=10&pageNo=1`;

  try {
    const res = await fetch(url);
    const text = await res.text();
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
      body: text
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: e.message })
    };
  }
};
