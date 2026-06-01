```typescript
export type FormatterDefinition = { name: string; description: string };

export const BUILTIN_FORMATTER_DEFINITIONS: Record<
  string,
  FormatterDefinition
> = {
  torrentio: {
    name: `{service.id::exists["🚀 [{service.shortName}] "||""]}{service.cached::istrue["⚡ "||""]}{service.cached::isfalse["⏳ "||""]}📺 {stream.resolution::exists["{stream.resolution}"||"غير معروف"]} {stream.visualTags::exists["| 🌈 {stream.visualTags::join(' • ')}"||""]}`,
    description: `{stream.seasonEpisode::exists["🍂 {stream.seasonEpisode::join(' ')}\n"||""]}{stream.size::>0["📦 الحجم: {stream.size::bytes2} "||""]}{stream.seeders::>=0["| 👥 المتصلين: {stream.seeders}"||""]}
{stream.languageEmojis::exists["🎙️ الصوت: {stream.languageEmojis::join(' / ')}"||""]}{stream.subtitles::exists::and::stream.languageEmojis::exists["\n"||""]}{stream.subtitles::exists["📝 الترجمة: {stream.subtitleEmojis::join(' / ')}"||""]}
{stream.indexer::exists["⚙️ المصدر: {stream.indexer} "||""]}{stream.age::exists["| 📅 العمر: {stream.age}"||""]}
{stream.message::exists["ℹ️ {stream.message}"||""]}`,
  },
  torbox: {
    name: `{service.id::exists["🚀 [{service.shortName}] "||""]}{service.cached::istrue["⚡ "||""]}{service.cached::isfalse["⏳ "||""]}📺 {stream.quality::exists["{stream.quality}"||"غير معروف"]}{stream.resolution::exists[" ({stream.resolution})"||""]}`,
    description: `{stream.seasonEpisode::exists["🍂 {stream.seasonEpisode::join(' ')}\n"||""]}{stream.size::>0["📦 الحجم: {stream.size::bytes} "||""]}{stream.duration::>0["| ⏱️ المدة: {stream.duration::time}"||""]}
{stream.languages::exists["🎙️ الصوت: {stream.languages::join(' • ')}"||""]}{stream.subtitles::exists::and::stream.languages::exists["\n"||""]}{stream.subtitles::exists["📝 الترجمة: {stream.subtitles::join(' • ')}"||""]}
{stream.indexer::exists["⚙️ المصدر: {stream.indexer}"||""]}
{stream.message::exists["ℹ️ {stream.message}"||""]}`,
  },
  gdrive: {
    name: `{service.shortName::exists["🚀 [{service.shortName}] "||""]}{service.cached::istrue["⚡ "||""]}{service.cached::isfalse["⏳ "||""]}📺 {stream.resolution::exists["{stream.resolution}"||""]}{stream.seadexBest::istrue[" (🏆 الأفضل)"||""]}{stream.seadex::istrue::and::stream.seadexBest::isfalse[" (🎯 نسخة بديلة)"||""]}`,
    description: `{stream.seasonEpisode::exists["🍂 {stream.seasonEpisode::join(' ')}\n"||""]}{stream.quality::exists["🎥 {stream.quality} "||""]}{stream.encode::exists["🎞️ {stream.encode} "||""]}{stream.releaseGroup::exists["🏷️ {stream.releaseGroup} "||""]}
{stream.size::>0["📦 الحجم: {stream.size::sbytes} "||""]}{stream.duration::>0["| ⏱️ المدة: {stream.duration::time} "||""]}{stream.seeders::>0["| 👥 المتصلين: {stream.seeders} "||""]}
{stream.languages::exists["🌎 الصوت: {stream.languages::join(' | ')}"||""]}
{stream.subtitles::exists["📝 الترجمة: {stream.subtitles::join(' | ')}"||""]}
{stream.message::exists["ℹ️ {stream.message}"||""]}`,
  },
  lightgdrive: {
    name: `{service.shortName::exists["🚀 [{service.shortName}] "||""]}{stream.library::istrue["☁️"||""]}{service.cached::istrue["⚡ "||""]}{service.cached::isfalse["⏳ "||""]}📺 {stream.resolution::exists["{stream.resolution}"||""]}{stream.seadexBest::istrue[" (🏆 الأفضل)"||""]}`,
    description: `{stream.seasonEpisode::exists["🍂 {stream.seasonEpisode::join(' ')}\n"||""]}{stream.size::>0["📦 الحجم: {stream.size::sbytes} "||""]}{stream.duration::>0["| ⏱️ المدة: {stream.duration::time} "||""]}
{stream.languageEmojis::exists["🌐 الصوت: {stream.languageEmojis::join(' / ')}"||""]}
{stream.subtitles::exists["📝 الترجمة: {stream.subtitleEmojis::join(' / ')}"||""]}
{stream.message::exists["ℹ️ {stream.message}"||""]}`,
  },
  minimalisticgdrive: {
    name: `{stream.resolution::exists["{stream.resolution::replace('2160p','✨ 4K')::replace('1440p','📀 2K')::replace('1080p','🧿1080p')::replace('720p','💿720p')}"||"غير معروف"]}{service.cached::istrue[" ⚡ "||""]}{service.cached::isfalse[" ⏳ "||""]}
{stream.quality::exists["{stream.quality::upper}"||""]}`,
    description: `{stream.seasonEpisode::exists["🍂 {stream.seasonEpisode::join(' ')}\n"||""]}{stream.size::>0["📦 الحجم: {stream.size::sbytes} "||""]}
{stream.languages::exists["🌎 الصوت: {stream.languages::join(' • ')}"||""]}{stream.subtitles::exists["📝 الترجمة: {stream.subtitles::join(' • ')}"||""]}`,
  },
  prism: {
    name: `📺 {stream.resolution::exists["{stream.resolution::replace('2160p', '🔥4K UHD')::replace('1440p','✨ QHD')::replace('1080p','🚀 FHD')::replace('720p','💿 HD')}"||"غير معروف"]}`,
    description: `{stream.seasonEpisode::exists["🍂 {stream.seasonEpisode::join(' ')}\n"||""]}{stream.quality::exists["🎥 {stream.quality} "||""]}{stream.visualTags::exists["📺 {stream.visualTags::join(' | ')} "||""]}{stream.duration::>0["⏱️ المدة: {stream.duration::time} "||""]}
{stream.languages::exists["🗣️ الصوت: {stream.languageEmojis::join(' / ')}"||""]}{stream.subtitles::exists["📝 الترجمة: {stream.subtitleEmojis::join(' / ')}"||""]}
{stream.size::>0["📦 الحجم: {stream.size::sbytes} "||""]}{service.cached::isfalse::or::stream.type::=p2p::and::stream.seeders::>0["| 🌱 المتصلين: {stream.seeders} "||""]}
{service.cached::istrue["⚡ جاهز للمشاهدة "||""]}{service.cached::isfalse["⏳ غير جاهز "||""]}{service.id::exists["({service.shortName}) "||""]}
{stream.message::exists["ℹ️ {stream.message}"||""]}`,
  },
  tamtaro: {
    name: `{stream.resolution::exists["{stream.resolution::replace('2160p','   4K ')::replace('1440p','    2K ')::replace('p','P')}‍"||"‍     "]}{stream.type::exists["‍{stream.type::replace('debrid','    ')::replace('p2p','⁽ᵖ²ᵖ⁾')::replace('live','⁽ˡᶦᵛᵉ⁾')::replace('http','⁽ʷᵉᵇ⁾')::replace('usenet','‍⁽ⁿᶻᵇ⁾‍')::replace('stremio-usenet','‏⁽ⁿᶻᵇ⁾')::replace('info','⁽ᶦⁿᶠᵒ⁾')::replace('statistic','⁽ˢᵗᵃᵗˢ⁾')::replace('external','⁽ᵉˣᵗ⁾')::replace('error','⁽ᵉʳʳᵒʳ⁾')::replace('youtube','⁽ʸᵗ⁾')}‍‍‍"||""]}{service.cached::istrue["⚡"||""]}{service.cached::isfalse["‍⏳‍​"||""]}{stream.quality::exists["‍‍\n  〈{stream.quality::title::replace('Bluray Remux','Remux')::replace('Web-dl','Web‍-‍dl')::replace('Hc Hd-rip','HC HDRip')::replace('Hdrip','HDRip')}〉‍     "||""]}{stream.message::~Download["{tools.removeLine}\n"||""]}{stream.nSeScore::exists["‍\n  {stream.nSeScore::star::replace('⯪','☆')}            "||""]}{stream.message::~Download["{tools.removeLine}\n"||""]}`,
    description: `{stream.title::exists::and::stream.library::isfalse["✎  {stream.title::title::truncate(15)}"||""]}{stream.title::exists::and::stream.library::istrue["☁︎  {stream.title::title::truncate(15)} "||""]}{stream.year::exists::and::stream.episodes::exists::isfalse::and::stream.seasons::exists::isfalse[" ({stream.year})"||""]}{stream.seasonEpisode::exists["  {stream.seasonEpisode::join('·')::replace('E','ᴇ')::replace('S','s')::replace('0','₀')::replace('1','₁')::replace('2','₂')::replace('3','₃')::replace('4','₄')::replace('5','₅')::replace('6','₆')::replace('7','₇')::replace('8','₈')::replace('9','₉')}"||""]}
{stream.visualTags::=IMAX["{tools.removeLine}\n"||"{tools.removeLine}\n"]}{stream.encode::exists["▣  {stream.encode}  "||""]}{stream.visualTags::~DV::or::stream.visualTags::~HDR::or::stream.visualTags::~HDR10::or::stream.visualTags::~HDR10+::and::stream.visualTags::exists::and::stream.visualTags::=IMAX::isfalse["✦  "||""]}{stream.visualTags::exists::and::stream.visualTags::=IMAX::isfalse::and::stream.visualTags::~DV::isfalse::and::stream.visualTags::~HDR::isfalse::and::stream.visualTags::~HDR10::isfalse::and::stream.visualTags::~HDR10+::isfalse["✧  "||""]}{stream.visualTags::exists::and::stream.visualTags::=IMAX::isfalse["{stream.visualTags::sort::join(' · ')::replace('HDR · HDR','HDR')::replace(' · IMAX','')} "||""]}
{stream.audioTags::exists["♬  {stream.audioTags::lsort::join(' · ')::replace('DD · DD','DD')::replace('DTS · DTS','DTS')}  "||""]}{stream.audioChannels::exists["♯  {stream.audioChannels::join(' · ')} "||""]}
{stream.size::>0::and::stream.seasonPack::istrue["❖  "||""]}{stream.size::>0::and::stream.seasonPack::isfalse["◈  "||""]}{stream.size::>0["{stream.size::sbytes}"||""]}{stream.folderSize::>0["/{stream.folderSize::sbytes}"||""]}{stream.bitrate::exists[" · {stream.bitrate::sbitrate::replace('Mbps','ᴹᵇᵖˢ')::replace('Kbps','ᴷᵇᵖˢ')} "||""]}{stream.message::~Download["{tools.removeLine}"||""]}{service.cached::isfalse::or::stream.type::=p2p::and::stream.seeders::>0["⇄ {stream.seeders}❦ "||""]}{stream.age::exists["· {stream.age}"||""]}
{stream.proxied::istrue["⛊  "||"⛉  "]}{service.shortName::exists["[{service.shortName}] "||""]}📺 {stream.private::istrue[" ⚿ خاص "||""]}{stream.releaseGroup::exists[" · {stream.releaseGroup::truncate(13)}"||""]}{stream.indexer::exists::and::stream.type::~usenet[" · {stream.indexer::truncate(13)}"||""]}{stream.message::~Download["{tools.removeLine}\n"||""]}
{stream.uLanguages::exists["⛿  {stream.uSmallLanguageCodes::join(' · ')::replace('ꜰ','ғ')::replace('x','х')::replace('ꞯ','ϙ')::replace('ꜱ','s')::replace('ᴅᴜᴀʟ ᴀᴜᴅɪᴏ','ᴅᴜᴏ')::replace('ᴅᴜʙʙᴇᴅ','مدبلج')}  "||""]}{stream.subbed::istrue::and::stream.uLanguages::exists["· مترجم "||""]}{stream.subbed::istrue::and::stream.uLanguages::exists::isfalse["⛿  مترجم "||""]}{stream.uSubtitles::exists["({stream.uSmallSubtitleCodes::join(' · ')::replace('ꜰ','ғ')::replace('x','х')::replace('ꞯ','ϙ')::replace('ꜱ','s')})  "||""]}{stream.seadex::or::stream.seScore::>0::or::stream.seScore::<0::or::stream.message::exists::or::stream.rseMatched::length::>0[" »  "||""]}{stream.seadexBest::istrue[" 🏆 أفضل نسخة "||""]}{stream.seadex::istrue::and::stream.seadexBest::isfalse[" 🎯 نسخة بديلة "||""]}
{stream.message::exists[" ℹ️ {stream.message}"||""]}`,
  },
};


```
