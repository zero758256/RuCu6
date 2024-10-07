// 2024-08-05 19:25

const url = $request.url;
const header = $request.headers;
const isNetEase = url.includes("/interface") && url.includes(".music.163.com/");

if (isNetEase) {
  if ($persistentStore.read("开启共享会员") === "是") {
    header["cookie"] = $persistentStore.read("RuCu6_Music163_Cookie");
    header["mconfig-info"] = $persistentStore.read("RuCu6_Music163_MConfigInfo");
    header["user-agent"] = $persistentStore.read("RuCu6_Music163_UserAgent");
  } else {
    $done({});
  }
  $done({ headers: header });
} else {
  $done({});
}
