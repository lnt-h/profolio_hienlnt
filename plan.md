# HIENLNT — Software Engineer Portfolio

> **Implementation-ready design & engineering plan**  
> Domain dự kiến: **https://hienlnt.id.vn** · Chủ sở hữu: **Lê Ngọc Tân Hiền (Hien Le)**  
> Cập nhật: **30/10/2026** · Trạng thái: **PLAN ONLY — chưa triển khai website**  
> Stack: **Next.js + React + TypeScript + Tailwind CSS + Motion for React**

## 0. Mục tiêu, phạm vi và quy tắc

Xây một **personal portfolio Software Engineer độc lập**, ưu tiên chất lượng triển khai và trải nghiệm nhà tuyển dụng: trong vài giây đầu nhìn thấy vai trò; sau đó đọc được giới thiệu, xem dự án thật, kỹ năng, nguồn GitHub và cách liên hệ. Website có tính sáng tạo, animation được chọn lọc, nhưng không trở thành trang demo hiệu ứng khó sử dụng.

**Quy ước:**

- **[CHỐT]**: nội dung/hiệu ứng người dùng đã chọn hoặc chỉnh trực tiếp trong cuộc trò chuyện.
- **[ĐỀ XUẤT]**: quyết định triển khai cụ thể của tài liệu; có thể tinh chỉnh sau khi review và kiểm thử.
- **[TÙY CHỌN]**: không thuộc bản lõi; triển khai khi có thời gian/nội dung/điều kiện phù hợp.
- **[CẦN DỮ LIỆU]**: không tự bịa email, GitHub/LinkedIn, CV, kinh nghiệm, chỉ số, thành tích hoặc dự án.

**Phạm vi:** một landing page responsive, phong cách **Minimal Editorial × Creative Developer × Apple-inspired Interactions**; trải nghiệm tiếng Anh là đề xuất phù hợp CV quốc tế; ưu tiên desktop song mobile phải đầy đủ. Không ràng buộc portfolio với một sản phẩm hay dự án cụ thể. Domain đã **được chọn làm tên sử dụng**, chưa mặc nhiên coi là đã đăng ký/kích hoạt.

**Không làm trong giai đoạn tài liệu:** tạo project, cài package, thêm integration secrets, xây UI, deploy, đăng ký tên miền. File này là hướng dẫn đầy đủ để dùng trong Codex Plan/Build về sau.

---

## 1. Master inspiration index — 10 nhóm đã lựa chọn

| ID | Nguồn tham khảo | Link gốc / nguồn ảnh | Học từ mẫu | Nơi áp dụng | Trạng thái |
|---|---|---|---|---|---|
| **I01** | Minimal 0–100% Loader | Ảnh người dùng gửi; không có URL công khai | Số phần trăm lớn, dấu `%` nhỏ, progress line mảnh, chữ uppercase tracking rộng, nền sáng | Preloader | **[CHỐT]** |
| **I02** | **Majd Portfolio** | https://majd-portfolio.framer.website/ | Kem sáng–đen, giant heading, bố cục editorial tối giản, glass/rounded accents | Palette + typography hierarchy | **[CHỐT]** |
| **I03** | **Achint Verma Portfolio** | https://achint.vercel.app/ | Kinetic curved marquee; các vòng tròn tech có `POKE · DRAG · FLICK`; 3D fluid blue orb | Skills + Marquee; orb tùy chọn | **[CHỐT]** carousel/marquee; **[TÙY CHỌN]** orb |
| **I04** | **Apple-like Floating Glass Navbar** | Ảnh người dùng gửi; không có URL công khai | Header capsule nằm **chính giữa phía trên**, glass blur, sliding active pill, CTA tròn sáng | Global navigation | **[CHỐT]** |
| **I05** | **Behind the Curtains** | Ảnh người dùng gửi; không có URL công khai | Heading sans + italic serif; 3 card GitHub, Guestbook, Spotify trên nền tối | Personality section | **[CHỐT]** bố cục; dữ liệu phải thật |
| **I06** | **Mini Scroll Progress** | Ảnh người dùng gửi; không có URL công khai | Một vạch tiến trình rất **ngắn và mảnh**, đặt giữa sát mép trên | Global scroll indicator | **[CHỐT]** |
| **I07** | **Junaid Jamel** | https://www.junaidjamel.com/#process | About 2 cột, portrait B&W, khung + hard shadow, heading gray/black, geometric sans | About + font direction | **[CHỐT]** phong cách |
| **I08** | **Thinh Le Portfolio** | https://thinh.io.vn/portfolio | Custom cursor hình tròn **đảo màu nền**, phóng to/zoom khi hover | Global cursor + Hero spotlight | **[CHỐT]** |
| **I09** | **Sayeed Joy** | https://sayeedjoy.com/ | Contact hai bubble tin nhắn, link Email/LinkedIn/GitHub, footer ngày/giờ tối giản | Contact + Footer | **[CHỐT]** |
| **I10** | **Ganesh Angadi** | https://ganeshangadi.online/ | Hero chữ cực lớn, terminal `$ whoami`, ánh vàng tròn tương tác với chữ | Section 01 Hero | **[CHỐT]** |

> Các link là **reference thiết kế**, không phải nguồn code đã được cấp quyền sao chép. Ưu tiên **ảnh người dùng đã gửi + mô tả trong chat** nếu website tham khảo thay đổi giao diện. Không lấy ảnh chân dung, nội dung, dữ liệu cá nhân, logo hay các asset độc quyền từ website mẫu để dùng trên trang của mình.

### 1.1. Screenshot mapping (đính kèm trong ZIP reference pack)

| Ảnh chuẩn hóa | Ảnh người dùng gửi | Tương ứng |
|---|---|---|
| `references/01-preloader.png` | 17.32.24 | I01 |
| `references/02-majd-hero.png` | 17.49.23 | I02 |
| `references/03-achint-marquee.png` | 17.50.47 | I03 / Marquee + Tech spheres |
| `references/04-achint-orb.png` | 17.51.53 | I03 / Orb (optional) |
| `references/05-glass-navbar.png` | 18.01.51 | I04 |
| `references/06-behind-the-curtains.png` | 18.02.52 | I05 |
| `references/07-mini-scroll-progress.png` | 18.03.35 | I06 |
| `references/08-junaid-about.png` | 18.05.25 | I07 |
| `references/09-inverted-cursor.png` | 18.12.36 | I08 |
| `references/10-sayeed-contact.png` | 18.14.58 | I09 |
| `references/11-ganesh-hero.png` | 18.17.58 | I10 |

`plan.md` có thể dùng độc lập nhờ các URL và mô tả. ZIP reference pack là **bản bổ trợ** giúp Codex/thiết kế đối chiếu hình ảnh, không phải yêu cầu ứng dụng phải import các screenshot vào production.

---

## 2. Thông số định hướng toàn website

### 2.1. Mood & visual identity

- **[CHỐT]** Nền chủ đạo **warm off-white / cream**, chữ **near-black / dark navy-black**, khoảng trắng rộng, heading cực lớn.
- **[CHỐT]** Một số section tương tác chuyển sang **deep black / charcoal** để tạo nhịp điệu thị giác: Skills → Marquee → Behind the Curtains.
- **[CHỐT]** Hero có **vòng tròn vàng/gold** tương tác con trỏ; **[CHỐT]** Contact bubble hỏi có điểm nhấn xanh.
- **[ĐỀ XUẤT]** Phân bổ hình ảnh ~65% nền sáng, ~30% nền tối, ~5% accent; không biến mỗi section thành một palette riêng.
- **[ĐỀ XUẤT]** Sử dụng grain rất nhẹ nếu cần, nhưng tránh texture làm giảm độ tương phản hoặc tăng tải đáng kể.

### 2.2. Design tokens v1 — màu HEX đề xuất, không khẳng định là CSS gốc

| Token | HEX | Vai trò |
|---|---|---|
| `--color-bg` | `#F3EFEC` | Light background chính (lấy cảm hứng Majd) |
| `--color-paper` | `#FAFAF9` | Nền sáng thứ cấp, About / Contact |
| `--color-ink` | `#111111` | Chữ chính, nav, icon trên nền sáng |
| `--color-ink-navy` | `#18212D` | Heading navy-black tùy ngữ cảnh |
| `--color-muted` | `#777777` | Body phụ, caption sau khi kiểm tra contrast |
| `--color-border-light` | `#D9D5D2` | Separator nền sáng |
| `--color-dark` | `#050505` | Skills, marquee, Behind the Curtains |
| `--color-dark-card` | `#111111` | Card nền tối |
| `--color-dark-border` | `#2D2D2F` | Viền card tối |
| `--color-on-dark` | `#F8F8F8` | Chữ sáng trên dark |
| `--color-gold` | `#DDA91A` | Hero interactive spotlight, terminal accent |
| `--color-blue` | `#087CF3` | Contact outgoing bubble, accent hạn chế |
| `--color-violet` | `#9652F5` | Chỉ cho hiệu ứng iridescent chi tiết nếu dùng |
| `--color-spotify` | `#1ED760` | Chỉ ở card Spotify |

Lưu ý: `#777777` có thể không đạt contrast ở mọi kích thước/opacity, cần kiểm tra WCAG trước khi chốt. Màu mẫu trong chat được ước lượng từ screenshot, **không phải thông số CSS được xác thực**.

### 2.3. Typography

- **[CHỐT]** Phong cách heading kiểu Junaid: geometric modern sans, nét rõ, hơi mềm, kích thước lớn; tiêu đề vừa có dòng xám nhạt vừa có dòng đen đậm.
- **[ĐỀ XUẤT]** Font chính **Manrope**; so sánh **Geist** và **Plus Jakarta Sans** trước khi chốt; dùng `next/font` và font fallback phù hợp glyph tiếng Việt/tên riêng.
- **[ĐỀ XUẤT]** Secondary display font *Instrument Serif Italic* hoặc một italic serif có giấy phép hợp lệ, **chỉ dùng một vài cụm chữ nhấn** như `&& a little more.`
- **[ĐỀ XUẤT]** `ui-monospace`, `Geist Mono` hoặc monospace tương đương cho `$ whoami`, số ngày giờ, section index, status.
- Font-family chính xác của Junaid **chưa được xác minh**; trước khi clone typography, có thể kiểm tra trên Chrome **Inspect → Computed → Rendered Fonts**. Không tự nhận font đề xuất là font thực tế của Junaid.

| Level | Desktop đề xuất | Mobile đề xuất | Lưu ý |
|---|---:|---:|---|
| Hero H1 | `clamp(5rem, 10vw, 11rem)` | `clamp(2.6rem, 11vw, 5rem)` | 3 dòng; line-height ~0.87–1.0, test overflow |
| Section H2 | 48–80px | 30–44px | Có thể pha màu 2 dòng |
| Card H3 | 22–32px | 20–26px | Dễ quét nội dung |
| Body | 17–19px | 16–18px | Line-height 1.55–1.75 |
| Eyebrow/meta | 12–14px | 12–13px | Tracking rộng vừa đủ, không quá mảnh |

### 2.4. Grid và spacing

- [ĐỀ XUẤT] `max-width: 1280–1440px` cho layout, trừ Hero/Marquee có thể full-bleed.
- 12-column desktop, 8-column tablet, 4-column mobile; khoảng đệm 20px mobile, 32px tablet, 48–64px desktop.
- Section padding dọc: desktop 96–144px, mobile 64–80px; đủ khoảng thở để typography dẫn dắt.
- Card radius 18–24px; bubble 20–24px; navbar full pill; portrait border 1px + offset hard shadow.
- Không lạm dụng gradients/glows, shadow mạnh hoặc cỡ chữ quá nhỏ chỉ vì giống screenshot.

---

## 3. Thứ tự trang — one-page information architecture đã thống nhất

| Index | Section / anchor | Phong cách | Mục đích | Inspiration |
|---|---|---|---|---|
| **00** | **Preloader** (overlay) | Sáng, tối giản | First impression / intro progress | I01 |
| **01** | **Hero** `#home` | Kem + chữ khổng lồ + vàng | Hiện diện cá nhân, vai trò | I02 + I10 + I08 |
| **02** | **About Me** `#about` | Sáng, editorial portrait | Giới thiệu chân thật, tư duy | I07 |
| **03** | **Featured Projects** `#projects` | Sáng, ảnh dự án lớn | Năng lực qua sản phẩm thực tế | I02 + I07 (phong cách) |
| **04** | **Skills & Tech Stack** `#skills` | Chuyển sang tối | Tech spheres, carousel kéo/thả | I03 |
| **05** | **Curved Kinetic Marquee** (divider) | Tối, chữ trắng | Nhịp điệu thị giác/brand | I03 |
| **06** | **Behind the Curtains** `#more` | Tối, 3 interactive cards | Cá tính, hoạt động cộng đồng | I05 |
| **07** | **Minimal Contact** `#contact` | Trở về sáng, blue bubble | Liên hệ rất nhanh | I09 |
| **08** | **Tiny Footer** | Sáng tối giản | Năm, ngày, giờ VN, credit | I09 |

**Global UI (không tính thành section):** floating centered glass navbar (I04), mini top scroll progress (I06), inverted zoom cursor (I08), scroll reveal, responsive state và reduced-motion fallbacks.

**Không thêm bắt buộc** section Experience timeline, Process ba bước, Services, Blog hoặc Statistics như file cũ. Chúng không nằm trong 9 phần đã chốt. Có thể cân nhắc trong phiên bản sau nếu có dữ liệu thật và không làm loãng câu chuyện.

**Luồng đọc:** Hero → About → Projects → Skills → visual break → GitHub/Guestbook/Spotify → Contact → Footer. Navigation ưu tiên Home / About / Projects / More / Contact; Skills nằm trong `More` hoặc tự reveal nav nếu UX hợp lý.

---

## 4. Đặc tả từng section

### 4.0. Section 00 — Fullscreen preloader `0% → 100%` [CHỐT]

**Reference:** screenshot I01 `references/01-preloader.png`; không có URL gốc.

**Visual:** toàn màn hình nền off-white/white; số `%` màu gần đen cực lớn ở tâm; dấu `%` nhỏ màu xám nằm ở phía trên phải của số; progress track rất mảnh; caption uppercase với letter spacing lớn, ví dụ `CRAFTING YOUR EXPERIENCE`; không dùng icon/ảnh rườm rà.

**Behavior:**

1. Mở trang lần đầu trong phiên, overlay hiện trước Hero; số đếm có easing cảm giác thật từ 0 đến 100; thanh ngang đồng bộ.
2. Ở 100%, giữ cực ngắn để cảm nhận hoàn tất, sau đó reveal Hero bằng mask/clip hoặc fade+translate phù hợp.
3. `Skip intro` khả dụng; người dùng back/forward hay mở trực tiếp `#projects` không phải đợi intro.
4. Không giả bộ đếm tiến trình network thật; hiệu ứng là intro. Không để overlay che trang nếu JS bị lỗi/tắt.
5. `prefers-reduced-motion` bỏ phần đếm và vào nội dung; cho phép session visit sau bỏ qua animation.

**Thông số khởi điểm [ĐỀ XUẤT]:** 0→100 khoảng 0.9–1.4s, exit 0.3–0.5s; thời gian chặn tổng ≤ 1.8s nếu không có lý do UX đặc biệt. Dùng `tabular-nums`, state-machine (`idle | running | exiting | done | skipped`), cleanup on unmount; tránh scroll jump.

**Acceptance:** thấy 0 và 100; bar đúng tỷ lệ; tab keyboard vẫn có đường skip; refresh/anchor/reduced-motion không bị kẹt.

### 4.1. Section 01 — Hero: Big statement + Gold spotlight [CHỐT]

**References:** [Ganesh Angadi](https://ganeshangadi.online/), [Majd](https://majd-portfolio.framer.website/), [Thinh cursor](https://thinh.io.vn/portfolio); screenshot `references/11-ganesh-hero.png`.

**Copy định hướng chính (có thể biên tập cho giọng cá nhân):**

```text
$ whoami — Hien Le / Software Engineer

I BUILD
REAL-WORLD
SOFTWARE.

Software Engineering · AI · Cloud
Turning ideas into useful, thoughtfully engineered products.
```

- Hero chiếm gần một viewport trên desktop, **h1 chữ 3 dòng rất lớn** màu navy-black/near-black, căn trái, khoảng trắng bên phải có chủ ý.
- Eyebrow kiểu terminal `$ whoami` màu vàng/trầm ở trên; subline tối giản phía dưới, tránh tuyên bố kinh nghiệm chưa có.
- **Gold spotlight** dạng hình tròn ấm được dùng như một tương tác trực quan: khi cursor vào chữ, hình tròn phóng lớn; vùng chữ bên trong tạo hiệu ứng reverse/highlight (đảo trắng/đen) theo thiết kế; rời đi thu nhỏ.
- Spotlight không phải lớp màu vàng che chữ làm mất khả năng đọc; nếu kỹ thuật blend cho hiệu quả xấu thì dùng masked duplicate text có contrast tốt.
- Có thể xuất hiện CTA `Explore Projects` hoặc một dấu mũi tên scroll tinh tế, nhưng **không phá vỡ bố cục chữ** của reference.
- Hero không chạy video, không ảnh 3D, không dùng nhiều loại glow; spotlight là điểm nhấn chính.

**Hero cursor nuance:** cursor toàn trang là inverted circle (I08), nhưng khi vào Hero H1, **chuyển variant** `hero-spotlight` với vàng gold và đường kính lớn. Không hiển thị hai cursor trùng nhau. Đo performance của `mix-blend-mode`/mask và fallback nếu GPU yếu.

**Responsive:** H1 giảm theo `clamp`, dùng `overflow-wrap`/breaks có chủ ý; trên mobile vùng vàng nhỏ và không đòi hỏi hover. Motion dịu, không ngăn người dùng cuộn.

### 4.2. Section 02 — About Me (photo + narrative) [CHỐT]

**Reference:** [Junaid Jamel](https://www.junaidjamel.com/#process); `references/08-junaid-about.png`.

**Layout desktop:**

- Heading hai dòng phía trên: dòng đầu màu xám nhạt, dòng sau bold black, ví dụ `Engineering ideas, / into real products.`
- Bên trái khoảng 5/12: **chân dung đen trắng thật** trong khung chữ nhật border mảnh, hard shadow lệch phía dưới/phải; tag nhỏ đè góc ảnh, social icons tối giản.
- Bên dưới portrait: `Hien Le` và vai trò `Software Engineer`.
- Bên phải khoảng 7/12: 2–3 khối văn bản, câu mở đầu bold, đoạn giải thích ngắn, một câu nguyên tắc nổi bật; whitespace rộng.
- Mobile: heading → portrait → name/social → bio; không dùng copy gợi ý như kinh nghiệm nhiều năm khi chưa có dữ liệu.

**Copy mẫu trung tính — chưa phải dữ liệu CV xác thực:**

> I care about building software that solves real problems. I enjoy working across product thinking, engineering fundamentals, and the tools needed to ship useful applications.

Trước xuất bản, bổ sung bio do chủ website xác nhận. Không dùng ảnh chân dung mẫu làm ảnh của Hiền; placeholder chỉ tồn tại trong prototype.

### 4.3. Section 03 — Featured Projects [CHỐT về sự hiện diện; nội dung CẦN DỮ LIỆU]

**Visual:** nền sáng, section heading lớn, editorial grid 1–2 cột; project preview giàu hình ảnh, card thoáng, ít chrome. Project nổi bật có thể full width; các project khác xếp lưới.

**Mỗi project card cần:** tên, 1–2 câu problem/solution, vai trò đóng góp, stack thật, trạng thái thật (`In progress`/`Completed`), link GitHub/demo/case study nếu tồn tại, ảnh/screenshot được phép sử dụng.

**Tương tác:** hover ảnh `scale(1.02–1.04)`, hiện mũi tên/mô tả nhỏ; focus keyboard tạo trạng thái tương đương. Không làm chữ chỉ đọc được khi hover. Tránh nested links sai HTML. Có reveal khi scroll nhưng không trì hoãn đọc nội dung.

**Case study tùy chọn:** `Context → Challenge → My Role → Design/Architecture Decisions → Implementation → Result/Lessons` chỉ nếu có nội dung thật. Không tự đặt tên dự án, badge chứng chỉ, số người dùng hoặc số liệu performance.

### 4.4. Section 04 — Skills & Tech Stack interactive carousel [CHỐT]

**Reference:** [Achint Verma](https://achint.vercel.app/); phần kỹ năng có vòng tròn logo công nghệ và gợi ý `POKE · DRAG · FLICK`; screenshot `references/03-achint-marquee.png` có một phần phía trên.

**Visual:** nền chuyển sang deep black/blue-black, sân chơi rộng, nhiều **bong bóng tròn tối** có gradient/border nhẹ, đặt logo tech và label; cảm giác có chiều sâu/nhẹ nhàng nhưng không thành trò chơi nặng.

**Interaction states:**

- **Idle**: các bubble có motion nhỏ/float rất chậm; đọc được label.
- **Hover/Poke**: bubble scale + nhẹ glow hoặc parallax; tooltip chứa tên công nghệ và context sử dụng nếu cần.
- **Drag**: kéo theo chuột, có resistance/bounds; không drag toàn trang; tránh conflict với scroll dọc.
- **Flick**: có inertia có giới hạn, bounce nhẹ, tự về vùng hợp lệ; không bay ra khỏi viewport.
- **Touch**: kéo/swipe thực, không phụ thuộc hover; không chặn scrolling tự nhiên một cách vô lý.
- **Keyboard**: có **list/grid kỹ năng semantic** hoặc controls đơn giản để không bắt buộc drag; status readable với screen reader.

**Data:** nhóm kỹ năng theo lĩnh vực thực sự nắm; chỉ dùng icon/label có căn cứ. Không cần thanh `% proficiency`. Icon thương hiệu chỉ dùng theo giấy phép/brand guidelines phù hợp.

**Kỹ thuật đề xuất:** Motion drag/dragConstraints/dragElastic; vật lý đơn giản bằng JS/motion values. Không mặc định dùng Matter.js hoặc 3D engine nếu CSS/Motion làm được.

### 4.5. Section 05 — Curved Kinetic Marquee [CHỐT]

**Reference:** [Achint Verma](https://achint.vercel.app/), screenshot `references/03-achint-marquee.png`.

**Visual:** nền đen liền mạch với Skills; typography uppercase **cực lớn màu trắng chạy theo một cung cong**; phân tách bằng ✦/star. Thông điệp có thể là `ENGINEERING ✦ CREATIVE ✦ BUILDING ✦` hoặc `THINK ✦ BUILD ✦ ITERATE ✦` (copy đề xuất, không lặp nguyên wording nguồn).

**Interaction:** animation loop chậm, đều, không giật ở điểm reset; có thể tăng/giảm tốc hoặc đổi hướng nhẹ theo `scroll velocity` nhưng **không bắt buộc**; hover có thể giảm tốc. Không gây marquee khó đọc hoặc chóng mặt.

**Implementation:** ưu tiên SVG `path` + `textPath` với duplicate text segment để loop, kết hợp Motion hoặc GSAP khi thật sự cần. SVG chữ lặp là decoration: ẩn phần duplicate khỏi accessibility tree; thông điệp semantic có một bản đọc được. Trên mobile và reduced-motion, hiển thị phiên bản tĩnh cong/straight rõ ràng.

**Acceptance:** chạy liền mạch; không thấy nhảy loop; không tạo overflow ngang; vẫn đọc được khi animation bị tắt.

### 4.6. Section 06 — Behind the Curtains [CHỐT]

**Source:** screenshot riêng `references/06-behind-the-curtains.png`, không có link web gốc được cung cấp.

**Header:** eyebrow uppercase tracking rộng `BEHIND THE CURTAINS`, tiêu đề 2 dòng gồm bold sans trắng `Beyond the code` + italic serif xám `&& a little more.` (copy đề xuất, giữ nguyên **cảm giác pha font** của ảnh).

**Layout desktop:** 3 rounded dark cards trên cùng một hàng; radius 20–24px, border rất mảnh, khoảng cách đều; mobile xếp dọc. Các card gồm:

1. **GitHub Activity:** tên profile, commit/push công khai gần nhất hoặc pinned repo, thời gian tương đối, link repo và icon liên kết. Dữ liệu chỉ từ public endpoint có quyền truy cập, không giả commit/trạng thái; nếu không tải được, hiện fallback link `View GitHub` và trạng thái trung tính. Có cache và rate-limit handling.
2. **Guestbook:** heading `Leave your signature`, câu mời, avatar stack **chỉ với dữ liệu/ảnh được người tham gia đồng ý**, CTA `Sign Guestbook →`, ánh glow cam nhẹ khi hover; đọc được guest messages đã duyệt. Backend chỉ bổ sung khi thật sự bật tính năng, phải có giới hạn tần suất, kiểm tra dữ liệu, chống spam/bot, chống XSS, moderation, privacy notice; không để người dùng upload HTML tùy ý.
3. **Spotify / Last Played:** ảnh album (nếu dữ liệu hợp lệ), bài hát gần nhất hoặc currently listening, tên artist, màu accent Spotify green và link `Open on Spotify`. Dùng metadata theo API/điều khoản; **không phát nhạc bản quyền trong website** khi chưa có quyền phù hợp. OAuth/token chạy server side và không để lộ refresh token. Nếu không có Spotify kết nối, hiển thị card không dữ liệu hoặc một fallback có thật (ví dụ `What I'm learning`) sau khi chủ website duyệt.

**Nguồn dữ liệu chính xác, quyền truy cập, cách rate-limit và privacy** phải được duyệt trước khi bật public. Card chưa kết nối **không được tự điền tên bài hát, commit, số visitor hoặc người ký giả**.

**Animation:** card entrance stagger nhỏ; GitHub glow trung tính; Guestbook glow màu hổ phách/cam **rất nhẹ**; Spotify overlay/ảnh grayscale tùy phép dùng. Card giữ usable trên mobile/tablet.

### 4.7. Section 07 — Minimal Contact (chat bubbles) [CHỐT]

**Reference:** [Sayeed Joy](https://sayeedjoy.com/), `references/10-sayeed-contact.png`.

**Visual:** quay về nền sáng, khoảng trắng rất nhiều; eyebrow `CONTACT` nhỏ, monospace uppercase. Hai tin nhắn tĩnh:

- Bubble **màu xanh** căn phải, dạng outgoing chat: `how do i actually reach you?`
- Bubble **xám sáng** căn trái, góc bo mềm: `easiest is email — or pick whatever's below.` cùng ba action **Email · LinkedIn · GitHub** có icon.

Dùng lời riêng của chủ portfolio và tiếng Anh ngắn gọn; **không phải chatbot thật**, không form đa trường, không nhiều CTA tranh chấp nhau. Desktop hạn chế chiều rộng 760–900px, mobile bubble co theo viewport và các icon/wrapping an toàn.

**Action:** email là `mailto:` và/hoặc nút `Copy email` riêng; copy feedback `Copied!`; LinkedIn/GitHub trỏ đến URL thật, kiểm tra ở bước chuẩn bị nội dung. Có focus rõ và touch target đủ lớn. Nếu chưa có địa chỉ đã xác nhận thì chưa xuất bản action giả.

**Quyết định điều chỉnh:** Contact theo Sayeed là **lựa chọn chính**, thay cho contact form tối + 3D orb từ Achint. Orb **không nằm trong Contact mặc định**.

### 4.8. Section 08 — Tiny Footer + live Vietnam clock [CHỐT]

**Reference:** [Sayeed Joy](https://sayeedjoy.com/), `references/10-sayeed-contact.png`.

- Trái: `© {year} Hien Le` hoặc `© {year} Lê Ngọc Tân Hiền`.
- Phải: giờ địa phương Việt Nam chính xác `HH:mm:ss ICT (UTC+7)`; thêm ngày `30 Oct 2026` dạng nhỏ nếu bố cục cho phép.
- **Timezone cố định `Asia/Ho_Chi_Minh`** bất kể timezone thiết bị người xem.
- Năm copyright và ngày thay đổi đúng tại midnight địa phương; **không hardcode 2026** vĩnh viễn. Có thể ghi `Built with Next.js` rất nhỏ, nhưng không làm footer trở nên rối.
- Clock cập nhật ~1 lần/giây, tránh hydration mismatch bằng placeholder ổn định trước mount; không để live region đọc mỗi giây. Tab ẩn giảm updates khi cần.
- Mobile: các thành phần chuyển 2–3 dòng, căn trái hoặc chia hai dòng hợp lý.

### 4.9. Optional 3D Fluid Orb [TÙY CHỌN — Phase 3]

**Reference:** [Achint Verma](https://achint.vercel.app/), `references/04-achint-orb.png`.

Ảnh mẫu ở Contact tối có một blob xanh điện phát sáng biến dạng theo chuyển động chuột. Vì **Contact chính đã đổi sang chat bubbles**, chỉ xét tính năng này như một phần tương tác riêng (small playground/side feature) nếu sau này muốn thêm.

Nếu làm: dùng React Three Fiber/Three.js với shader nhẹ, pointer uniform, animation idle; dynamically import sau tương tác hoặc khi gần viewport; có fallback ảnh tĩnh, reduced motion, mobile low-power. **Không đưa vào critical path, không khiến LCP/INP suy giảm**. Nếu hiệu suất hoặc nội dung không phù hợp, bỏ hoàn toàn, không xem là thiếu chức năng.

---
## 5. Global components — hành vi bắt buộc xuyên trang

### 5.1. Apple-like Floating Glass Navbar [CHỐT]

**Reference:** screenshot `references/05-glass-navbar.png` (không có URL public); tinh thần Apple-like Liquid Glass, không sao chép proprietary components.

**Vị trí/bố cục:**

- `position: fixed` tại **top-center**, không chạy full width; đặt thấp hơn mini scroll line để không chồng lên nhau.
- Capsule lớn viền bán trong suốt, background gần đen `rgba(...)`, backdrop blur, inner highlight, border sáng nhẹ, shadow mềm; kích thước co theo nội dung.
- Mẫu thứ tự desktop: **Home · About · Projects · More ▾ · Contact**. Trong reference nút cuối là `Book a Call`; với portfolio cá nhân đổi thành **Contact** hoặc **Let's Talk**.
- **Active item** là pill sáng, text gần đen, sliding indicator chuyển mượt theo section hiện tại.
- `More` dropdown chứa Skills, Behind the Curtains, Resume (chỉ khi có CV) và mục khác thật sự xuất hiện trên trang.
- CTA Contact kiểu capsule trắng nổi bật, không làm người dùng nghĩ là dịch vụ đặt lịch.

**Interaction:**

1. Click nav scroll tới đúng anchor và cập nhật active state. Scroll thủ công qua section thì **scrollspy** đổi tab tương ứng; đường active di chuyển nhẹ, không tạo flicker khi nằm ranh giới.
2. Khi đang ở `#skills`, `#more` có thể đánh dấu `More` active kèm lựa chọn hiện tại; active `Home` khi Hero ở phần đầu.
3. Dropdown mở bằng click/tap/keyboard, **không chỉ bằng hover**; Escape đóng; click ra ngoài đóng; keyboard focus đúng thứ tự.
4. Header phải có tương phản ổn trên cả nền kem lẫn nền đen. Có thể dùng glass dark liên tục với shadow ổn định, hoặc context color theo section nhưng tránh nhấp nháy khi qua ranh giới.
5. Mobile: ưu tiên capsule rút gọn (`Hien.` + Menu/Contact) hoặc horizontal compact; không ép 5 item thành một hàng tràn màn hình. Menu overlay không che tiến trình khi đã scroll.
6. `scroll-margin-top` cho mỗi anchor, kể cả khi màn hình thay đổi chiều cao hoặc deep link được load trực tiếp.

**Thông số khởi điểm [ĐỀ XUẤT]:** top khoảng 20–28px tùy breakpoint; chiều cao 56–64px; radius `999px`; blur khoảng 16–24px; active slide ~220–350ms spring nhẹ. Không giả định phải dùng API CSS Liquid Glass riêng.

### 5.2. Mini centered scroll progress [CHỐT — short & thin]

**Reference:** screenshot `references/07-mini-scroll-progress.png`.

- **Thanh nằm giữa, sát mép trên viewport**, width **120–160px**, height **2px**. Không phải progress chạy toàn chiều rộng màn hình.
- Track xám/trong suốt rất nhẹ, fill kem/trắng trên nền tối hoặc near-black trên nền sáng; tự tính tương phản nếu overlay xuyên nền.
- Tính tiến trình `scrollY / (documentHeight - viewportHeight)` và clamp 0–100; tăng khi kéo xuống, giảm khi kéo lên.
- Dùng `useScroll`/`useSpring` hoặc JS scroll passive; animation transform/scaleX, không đổi width mỗi frame nếu gây layout.
- Không hiển thị % số lớn và không có tooltip mặc định. `aria-hidden` nếu chỉ là indicator trang trí, bởi vì không có tác vụ bắt buộc gắn với nó.
- `z-index` đủ cao nhưng đứng riêng trên navbar. Khi người dùng reduced motion, progress vẫn có thể cập nhật ngay không cần spring.
- Test nội dung cực ngắn, scroll container không phải `window`, và đổi viewport height trên mobile.

### 5.3. Adaptive inverted + zooming custom cursor [CHỐT]

**Reference:** [Thinh](https://thinh.io.vn/portfolio); screenshot `references/09-inverted-cursor.png`.

**State model:**

| State | Trigger | Appearance |
|---|---|---|
| `default` | pointer trên phần thường | Vòng tròn nhỏ, tương phản theo nền: tối trên sáng, sáng trên tối |
| `interactive` | hover button/link/card | Nở 2–3x, motion spring, có thể có label/arrow nếu có ý nghĩa |
| `hero-spotlight` | hover H1 / vùng Hero được đánh dấu | Vòng gold lớn hơn, highlight/đảo text trong phạm vi vòng |
| `hidden` | touch, reduced motion, pointer rời cửa sổ, browser/keyboard focus không dùng pointer | Không hiển thị layer |

**Implementation path [ĐỀ XUẤT]:**

- Một **cursor layer duy nhất** đặt `pointer-events: none` và `aria-hidden: true`, không trói hover state vào render lại toàn bộ App Router page.
- Lấy tọa độ pointer, đưa vào motion values / `requestAnimationFrame`, render qua `transform: translate3d(...) scale(...)`; độ trễ nhẹ để theo tay nhưng không quá chậm.
- Với nền sáng/tối tương đối đồng nhất, có thể thử lớp màu trắng + `mix-blend-mode: difference`. Đây là **phương án**, không đảm bảo đẹp với ảnh/video và màu trung gian; test Safari/Chrome. Nếu blend bị lỗi, dùng state theo section (`data-theme='light|dark'`) để đổi cursor color.
- Gold variant là state của cursor, **không tạo layer đồng thời thứ hai**. Nếu cần text-invert, dùng mask/duplicate H1 một cách có kiểm soát; text semantic vẫn chỉ một H1 cho screen reader.
- Kích thước thử: 16–24px default, 44–64px interactive, 120–220px Hero; điều chỉnh sau khi test screenshot thật.
- Chỉ bật trên `hover: hover` **và** `pointer: fine`. Touch và stylus không nên bắt buộc giả lập hover; fallback con trỏ hệ thống.
- Không làm biến mất cursor native trước khi custom cursor đã khởi tạo thành công; khi scroll, đổi tab, mở dropdown, chuột rời viewport phải cleanup đúng.
- Focus keyboard phải có outline riêng, không dựa vào cursor để thể hiện focus.

### 5.4. Scroll reveals, transitions và các trạng thái

- Reveal nhẹ theo viewport cho heading, image, project cards: opacity + translateY nhỏ, stagger theo nhóm; tránh tất cả phần tử cùng bay vào từ xa.
- Nếu chuyển nền từ light sang dark giữa Projects/Skills, dùng transition có chủ đích bằng background/color, không fade trắng toàn trang.
- Menu/overlay và loader không được cướp focus hoặc khóa scroll rồi quên trả lại.
- Anchor navigation ưu tiên native; không sử dụng scroll hijacking hay smooth scroll quá dài.
- Mỗi animation cần mô tả tương ứng khi `prefers-reduced-motion: reduce`.

---

## 6. Motion specification — bảng kỹ thuật cho Codex

| Thành phần | Trigger | Motion đề xuất | Fallback / nghiệm thu |
|---|---|---|---|
| Preloader number | first session visit | Count 0→100, ~0.9–1.4s, `tabular-nums` | Skip, no JS, reduced motion không chặn |
| Preloader progress line | cùng count | scaleX 0→1, track mảnh | Đồng bộ số 100% |
| Intro → Hero | count complete / Skip | opacity/clip reveal ~300–500ms | Không thay đổi scroll position |
| Hero intro | after preloader | heading reveal bằng stagger ~50–90ms/line | Một H1 semantic, không split làm duplicate screen reader |
| Hero gold spotlight | pointer hover H1 | grow + masked/invert text, spring mềm | Nền/text luôn còn đọc được |
| Floating navbar active | click/scrollspy | `layoutId` / animated pill ~200–350ms | Instant switch giảm chuyển động |
| Navbar glass | scroll/context | subtle blur/border response | Contrast đủ cả dark/light |
| Mini progress | window scroll | `scaleX(scrollYProgress)` + spring nhẹ | Kích thước track không đổi 120–160px |
| About reveal | entering viewport | translateY 12–24px + opacity | Text, portrait hiện nếu JS lỗi |
| Project hover | hover/focus | image scale 1→1.03, arrow micro-motion | Focus keyboard xem được hành động |
| Skill poke | hover/tap | scale/glow ~150–250ms | Không hover vẫn thấy tên tech |
| Skill drag/flick | drag/swipe | bounded inertia, resistance | Không chặn scroll dọc hoặc keyboard |
| Curved marquee | viewport visible | continuous loop theo SVG path, tốc độ vừa | Reduced-motion static text |
| Dark cards | entering viewport | small stagger, ~80ms/card | Không hide nội dung lâu |
| Guestbook CTA | hover/focus | warm amber glow low intensity | No strobe/no strong pulsing |
| Spotify card | available data | optional subtle image overlay | Missing auth/data không làm layout hỏng |
| Contact bubbles | viewport entry | nhẹ như hai tin nhắn tới | Không giả bot đang gõ kéo dài |
| Copy email | click | label `Copied!` ~2s | Phản hồi lỗi copy + vẫn có mailto |
| Footer clock | time update | không animation; text monospace giữ width | Đúng ICT; không thông báo SR mỗi giây |
| Optional Orb | pointer interaction | WebGL shader reacts softly | Static illustration / omit on low-end |

**Easing khởi điểm:** `cubic-bezier(0.22, 1, 0.36, 1)` cho reveal; spring cho pointer/active pill; không bounce lố. Dùng opacity/transform thay vì cập nhật layout liên tục. Chỉ thêm GSAP khi SVG/marquee phức tạp vượt Motion/CSS, không đưa cả chồng thư viện vào mặc định.

---

## 7. Routing, component architecture, data contract

### 7.1. Stack chính

| Layer | Công nghệ | Lý do |
|---|---|---|
| Web application | **Next.js App Router** | Server-render nội dung chính, metadata/SEO, routing |
| Programming | **TypeScript + React** | Typing content/contracts, reusable components |
| Styling | **Tailwind CSS** | Design tokens, responsive utilities |
| Fonts | **`next/font`** | Tối ưu tải font, tránh layout shift |
| UI animation | **Motion for React** | Scroll, drag, spring, layout transitions |
| SVG marquee | Native SVG `path/textPath` + Motion | Curved marquee ít phụ thuộc |
| Custom cursor | CSS blend modes + motion values | Lightweight pointer following |
| Hosting | **Vercel** (đề xuất) | Deploy Next.js; kiểm tra phí và chính sách hiện hành |
| GitHub card | GitHub REST/GraphQL public metadata | Activity dữ liệu thật, có caching |
| Guestbook | Supabase/Postgres hoặc giải pháp tương đương (Phase 2) | Storage, moderation, anti-spam |
| Spotify | Spotify Web API (Phase 2 / optional) | Last played metadata nếu được cấp quyền |
| 3D orb | Three.js / React Three Fiber (Phase 3 optional) | Chỉ khi cần, lazy load |

Stack là định hướng triển khai; **không khóa version chưa kiểm tra compatibility tại ngày bắt đầu code**. Không cần backend riêng cho toàn landing page chỉ vì Guestbook là một card.

### 7.2. Component directory tree dự kiến

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    not-found.tsx
    projects/[slug]/page.tsx            # OPTIONAL: published case studies only
    api/guestbook/route.ts              # PHASE 2, if enabled
    api/spotify/route.ts                # PHASE 2, if enabled
  components/
    layout/
      SiteHeader.tsx
      FloatingGlassNav.tsx
      MobileNav.tsx
      MiniScrollProgress.tsx
      SiteFooter.tsx
      VietnamClock.tsx
    motion/
      Preloader.tsx
      AdaptiveCursor.tsx
      ScrollReveal.tsx
      MotionProvider.tsx
    sections/
      HeroSection.tsx
      AboutSection.tsx
      ProjectsSection.tsx
      SkillsSection.tsx
      KineticMarqueeSection.tsx
      BehindTheCurtainsSection.tsx
      ContactSection.tsx
    skills/
      SkillBubble.tsx
      DraggableSkillField.tsx
      AccessibleSkillList.tsx
    cards/
      ProjectCard.tsx
      GitHubActivityCard.tsx
      GuestbookCard.tsx
      SpotifyCard.tsx
    ui/
      SectionEyebrow.tsx
      SectionHeading.tsx
      ButtonLink.tsx
      IconLink.tsx
      CopyEmailButton.tsx
  content/
    profile.ts
    projects.ts
    skills.ts
    navigation.ts
  lib/
    formatVietnamTime.ts
    github.ts
    spotify.ts                         # PHASE 2
    guestbook.ts                       # PHASE 2
  styles/
    tokens.css
public/
  images/
  fonts/                                # only if required/licensed
  favicon.ico
  og-image.png
  resume.pdf                            # only when CV supplied
```

**Server / Client boundary:** Page/section text và project data render server/static càng nhiều càng tốt. Chỉ cursor, nav active/scrollspy, mini progress, drag physics, preloader, live clock và client interactions cần `use client`. Lazy-load expensive widgets. Không đặt `use client` lên cả `app/page.tsx` chỉ vì vài animation.

### 7.3. Data model / config (gợi ý, không phải code phải viết ngay)

- `profile`: fullName, displayName, role, shortBio, locationText (optional), availability (optional, phải đúng), verifiedSocialLinks, contactEmail.
- `projects[]`: id, slug, title, summary, problem, role, tech[], year, status, thumbnail, links, caseStudyContent?; chỉ dữ liệu thật.
- `skills[]`: id, name, group, iconAsset, confidenceEvidence?; không chứa phần trăm tự chấm.
- `navigation[]`: label, href, parentMenu?, matchSectionIds[] để `More` active khi Skills/Behind.
- `githubCard`: status (`loading|available|unavailable`), public repo, last public event, eventTime, public URL.
- `guestbook`: messageId, authorDisplayName, message, createdAt, moderationStatus; loại bỏ HTML/script đầu vào, xử lý đồng ý hiển thị.
- `spotifyCard`: availability, track, artist, albumImage, externalUrl, playedAt; token luôn phía server.

### 7.4. Routes và thông tin SEO

- `GET /`: single-page landing.
- Hash anchors chuẩn: `#home`, `#about`, `#projects`, `#skills`, `#more`, `#contact`. Marquee là divider, không nhất thiết có nav anchor riêng.
- `/projects/[slug]`: optional; chỉ tạo route khi case study đủ thực; back-to-projects đúng.
- `/not-found`: 404 theo palette.
- `metadata`: title `Hien Le — Software Engineer`, description theo bio thật, canonical khi DNS thật là `https://hienlnt.id.vn`, OG preview cá nhân, sitemap/robots đúng environment.
- CV PDF thật mới cho nút `Resume`; không tự tạo liên kết tới file không tồn tại.

---

## 8. Integrations: GitHub, Guestbook, Spotify — khả năng vận hành thật

### 8.1. GitHub recent activity

- Dùng public GitHub API với token server-side nếu cần, đọc event public/repo commit hợp lệ; API event không đảm bảo event mới nhất/đủ mọi hoạt động của user, nên hiển thị trạng thái đúng theo dữ liệu thực nhận.
- Fetch có cache/revalidation ở server để không gây rate limiting; không polling liên tục ở client. GitHub unavailable → `View GitHub` fallback.
- Không expose token hay repo private; không tự khẳng định “latest push 1h ago” nếu nguồn không xác nhận.

### 8.2. Guestbook

- Phase 2 sau khi phần lõi hoàn thiện. Chỉ thu tối thiểu display name + message, có policy về nội dung công khai; tránh thu IP/email nếu không cần.
- Server validation + schema + độ dài giới hạn + normalization; sanitization/escaping khi render, không `dangerouslySetInnerHTML` với input người dùng.
- Rate limiting, honeypot/CAPTCHA nếu phù hợp, moderation queue, report/delete/owner admin; bàn phím/màn hình nhỏ vẫn nhập được.
- Không giả avatar stack/visitor count khi chưa có dữ liệu; có empty state đẹp `Be the first to sign`.

### 8.3. Spotify

- Bắt buộc chính chủ cấp quyền hợp lệ; chỉ hiển thị dữ liệu công khai/được ủy quyền và tuân thủ Spotify developer rules.
- OAuth refresh token lưu server-side trong environment secret, API route/cache phù hợp, không gửi token về browser.
- `Recently played` khác `Currently playing`: label phải đúng dữ liệu thực. Khi thiếu quyền/quota, fallback gọn.
- Spotify card chỉ cung cấp artwork/metadata và link mở ngoài; không host/phát lậu audio.

---

## 9. Responsive matrix & accessibility

### 9.1. Responsive

| Viewport | Layout | Navigation | Interaction |
|---|---|---|---|
| 320–639px | One column, Hero H1 tự xuống dòng; cards stacked | Centered compact glass pill / Menu | Touch swipe cho skills, **không custom cursor**; marquee giảm chuyển động |
| 640–1023px | About có thể 2 cột nếu đủ chỗ; Projects 1–2 cột | Compact pill với dropdown | Tablet touch không phụ thuộc hover |
| 1024–1439px | 12 columns; Behind 3 card; Hero full typographic scale | Full floating capsule | Cursor, drag, scrollspy đầy đủ nếu pointer fine |
| ≥1440px | Giữ max width; Hero/marquee có thể full bleed | Same centered pill | Không kéo dòng body quá dài |

**Test viewports tối thiểu:** 320, 375, 390/393, 768, 1024, 1280, 1440, 1920, 2560px; test short viewport và orientation ngang. Không xuất hiện horizontal page scroll, H1 cắt chữ, card thấp quá mức hoặc floating nav đè lên chữ quan trọng.

### 9.2. Accessibility requirements (target WCAG 2.2 AA)

- Skip-to-content link; semantic landmarks `header/nav/main/footer`; một H1; H2/H3 có thứ tự hợp lý.
- Keyboard: Tab, Shift+Tab, Enter, Space, Escape trên nav/More/guestbook/controls. Focus ring không bị `overflow: hidden`/blend layer cắt.
- Menu phải có state `aria-expanded`, quản lý focus logic; đóng bằng Escape/click outside; không bắt buộc hover.
- `prefers-reduced-motion`: skip preloader, stop marquee/floating bubbles/slow chase cursor, tắt transition lớn và optional WebGL; vẫn đủ nội dung/tác vụ.
- `prefers-contrast` nếu có, visual vẫn rõ; text contrast tối thiểu 4.5:1 bình thường, 3:1 chữ lớn và UI boundaries theo WCAG liên quan.
- Touch targets xấp xỉ 44×44px khi có thể; thông tin quan trọng không chỉ xuất hiện qua hover/drag.
- Decorative cursor, marquees, icons, avatar decorations: `aria-hidden` thích hợp; ảnh dự án có alt thực chất; B&W portrait alt tên người.
- Live clock, count 0–100 và animation không thông báo liên tục cho screen reader.
- Zoom 200%, reflow 400%, font scaling và trình duyệt khi JS bị tắt/đang lỗi phải giữ được nội dung chính.
- Nếu guestbook có validation/error, thông báo rõ và có thể điều hướng bằng bàn phím.

---

## 10. Performance / optimization / SEO budgets

**Mục tiêu đo tại triển khai [ĐỀ XUẤT], không khẳng định đã đạt:**

- **Core Web Vitals p75:** LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 (khi có dữ liệu field thực tế).
- **Lighthouse mobile:** Performance ≥ 90, Accessibility ≥ 95 (lab goals, test manual vẫn cần).
- **Initial JavaScript:** hướng tới ≤ 180–220KB gzip ở page cơ bản, điều chỉnh sau bundle analysis.
- **Initial transfer:** hướng tới ~≤ 1MB, không bao gồm ảnh dưới fold lazy-load; theo dõi thêm khi card Spotify/GitHub được bật.
- `next/image`, responsive sizes, WebP/AVIF nếu phù hợp, width/height rõ; tránh full-resolution ảnh tham khảo lọt production.
- `next/font`/self-hosted licensed font nếu cần, subset hỗ trợ tiếng Việt; swap/fallback metrics để giảm CLS.
- Dùng `IntersectionObserver`/Motion viewport, lazy-load integrations, code-split complex drag field; defer optional orb hoàn toàn.
- Không chạy React state update mỗi `pointermove` cho cả page; dùng motion values / refs; listener passive cho scroll nếu dùng custom.
- Đo paint/repaint từ `mix-blend-mode`, blur diện rộng, `backdrop-filter` Safari, SVG textPath, nhiều box-shadow; giảm nếu FPS thấp.
- Revalidate data API ở server, không request GitHub/Spotify hàng giây từ browser.
- Preloader có thể làm chậm first meaningful interaction: đo **cả first visit lẫn revisit**, ưu tiên trải nghiệm thực. Nếu cần, rút ngắn intro thay vì che kết quả đo.
- Không index preview/staging; sitemap canonical dựa trên domain thật; proper OG image, alt text, HTML headings và structured data `Person` chỉ chứa link đã xác minh.

**Test browsers:** Chrome macOS/Windows, Safari macOS/iOS, Firefox, Chrome Android; đặc biệt kiểm tra blur and mix-blend-mode Safari. Có phương án no-JS/reduced-motion.

---

## 11. Roadmap triển khai — chỉ bắt đầu khi chủ website duyệt

### Phase 0 — Content audit & preparation [PLAN → BUILD GATE]

- [ ] Xác minh tên hiển thị, cách viết Latin, một đoạn bio tiếng Anh, mục tiêu công việc; không khai nhận kinh nghiệm chưa có.
- [ ] Chốt **ảnh chân dung thật** (bản B&W) và quyền sử dụng.
- [ ] Chọn tối thiểu 1–3 dự án có link/thông tin thật, ghi vai trò và trạng thái.
- [ ] Xác minh email, GitHub, LinkedIn, CV PDF (nếu có), domain/DNS đã đăng ký khi chuẩn bị launch.
- [ ] Chốt font chính qua visual comparison Manrope/Geist/Plus Jakarta Sans; xác nhận giấy phép font italic accent.
- [ ] Chốt copy Hero (`I BUILD / REAL-WORLD / SOFTWARE.`) và text chi tiết các section.
- [ ] Đánh giá budget thực tế cho Guestbook/Spotify, có quyền kết nối hay không.

**Deliverable:** content model + final copy + desktop/mobile wireframe + agreed tokens.

### Phase 1 — Core portfolio (ưu tiên xuất bản được)

- [ ] Khởi tạo Next.js App Router, TS, Tailwind, ESLint, tokens, fonts, metadata.
- [ ] Layout core: floating navbar + mini scroll progress + Hero + About + Projects + Skills static fallback + Contact + footer.
- [ ] Section dark transition, project cards, link thật, responsive and keyboard flows.
- [ ] Preloader 0–100 + skip + page reveal (đưa vào sau static content để dễ QA).
- [ ] Global adaptive cursor + Hero gold spotlight; kiểm tra Safari và touch fallback.
- [ ] Implement skip link, reduced motion, proper nav scrollspy/active state.

**Exit criteria:** website có thể dùng, đọc và liên hệ khi tắt animations; responsive toàn bộ; không link giả hoặc content bịa.

### Phase 2 — Signature interactions & personality

- [ ] Interactive draggable/flickable skills bubble field + accessible list fallback.
- [ ] Curved SVG kinetic marquee + seamless loop + reduced-motion static state.
- [ ] Behind the Curtains layout đúng 3 card; GitHub API thực + caching.
- [ ] Guestbook backend + moderation/anti-spam **nếu** được duyệt.
- [ ] Spotify metadata integration **nếu** đủ quyền/kỹ thuật; fallback nếu chưa kết nối.
- [ ] Motion polish, mobile touch behaviors and performance retest.

**Exit criteria:** UI có hành vi thật, không chỉ mock; backend bảo mật hợp lý; animation không đánh đổi readability.

### Phase 3 — Optional extras, hardening & deployment

- [ ] Xem xét 3D fluid orb như optional playground, **không trong Contact mặc định**; omit nếu nặng.
- [ ] Hoàn chỉnh case study chi tiết nếu có nội dung; thêm Resume khi PDF thật sẵn sàng.
- [ ] Audit keyboard/screen reader/zoom, no-JS, reduced motion, slow network, browser matrix.
- [ ] Lighthouse/Web Vitals thật, responsive screenshots, bundle analysis; fix regressions.
- [ ] DNS + HTTPS + environment secrets + noindex preview + production social meta, 404, sitemap.
- [ ] Deploy và verify trên domain sau khi xác nhận thực sự đã sở hữu domain.

**Không yêu cầu blog, services, shop, multi-page CMS, đăng nhập công khai, dashboard analytics trong scope lõi.**

---

## 12. Acceptance criteria / QA checklist tổng hợp

### Content & identity

- [ ] Domain/project title thống nhất `hienlnt.id.vn`, role **Software Engineer**.
- [ ] Không tồn tại dự án giả, kinh nghiệm giả, chứng chỉ giả, email/username tự suy diễn.
- [ ] Intro/hero copy không sao chép nguyên thương hiệu hoặc text tác giả tham khảo.
- [ ] Reference asset ảnh chụp chỉ phục vụ nghiên cứu, **không đưa vào sản phẩm cuối**.

### Global visual & nav

- [ ] Giữ palette warm cream + ink + dark interactive zone + gold Hero + blue Contact nhất quán.
- [ ] Floating navbar **ở giữa phía trên**; có đúng active pill, More dropdown và Contact CTA.
- [ ] Scrollspy chính xác khi scroll bằng chuột/touch/click anchor; active Home/About/Projects/More/Contact phù hợp.
- [ ] Mini scroll progress **120–160px × 2px**, nằm top-center; không kéo ngang màn hình.
- [ ] Navbar/scroll progress không chồng lên nhau; contrast tốt cả light/dark.

### Intro / cursor / Hero

- [ ] Loader hiển thị 0→100 với bar và caption; reveal mượt, skip được, không treo.
- [ ] Gold spotlight phóng to trên Hero text rồi trở lại bình thường; không che/biến mất chữ.
- [ ] Cursor đảo màu khi chuyển nền sáng/tối, grow khi hover và hide trên touch/reduced-motion.
- [ ] Không hiện đồng thời nhiều custom cursors; không cản click, focus hoặc input.

### Sections

- [ ] About 2 cột (desktop), chân dung thật B&W, frame + hard shadow, dual-tone heading.
- [ ] Projects có ảnh và liên kết/role/status thật; card hover/focus rõ.
- [ ] Skills gồm tech bubble drag/swipe/flick có bounds và fallback keyboard.
- [ ] Marquee có chữ cong, separators ✦, lặp mượt, không overflow, reduced-motion static.
- [ ] Behind the Curtains có **3 card**: GitHub / Guestbook / Spotify (hoặc fallback đã phê duyệt), dark cards, heading sans + serif italic.
- [ ] Contact **hai bong bóng chat** + Email/LinkedIn/GitHub, **không form dài**.
- [ ] Footer hiển thị ngày/năm/giờ **Việt Nam UTC+7**, hoạt động qua midnight và thay đổi năm.
- [ ] Orb 3D không bị coi là bắt buộc và **không chiếm chỗ Contact**.

### QA/accessibility/performance

- [ ] No horizontal overflow ở 320–1920px, không H1 bị clipping khi font chưa load.
- [ ] Keyboard, Escape dropdown, focus outlines, target sizes, screen reader semantics OK.
- [ ] Reduced motion thực sự giảm intro/cursor/marquee/float/3D, không chỉ giảm duration.
- [ ] Không có content cần hover mới xem được; app không phụ thuộc JS để đọc nội dung chính.
- [ ] Safari, Chrome, Firefox, mobile touch hoạt động; không lỗi Hydration và missing API permissions.
- [ ] GitHub/Guestbook/Spotify có loading/empty/error fallback rõ, không giả dữ liệu.
- [ ] OAuth/server secrets không rò rỉ; Guestbook có validation/moderation/rate limit.
- [ ] SEO metadata, canonical, sitemap, image alt và OG đúng sau khi launch.
- [ ] Lưu báo cáo benchmark thực tế; không tự điền pass cho performance khi chưa đo.

---

## 13. Những dữ liệu chủ website cần cung cấp trước lúc triển khai nội dung thật

| Input | Trạng thái | Hướng xử lý nếu chưa có |
|---|---|---|
| Email liên hệ | **[CẦN DỮ LIỆU]** | Giữ draft placeholder, không xuất bản link giả |
| GitHub URL | **[CẦN DỮ LIỆU]** | Giấu link/activity nếu chưa xác minh |
| LinkedIn URL | **[CẦN DỮ LIỆU]** | Không tự suy đoán handle |
| Ảnh chân dung | **[CẦN DỮ LIỆU]** | Dùng neutral monogram khi prototype |
| Bio tiếng Anh cuối | **[CẦN DỮ LIỆU]** | Copy gợi ý phải được duyệt |
| Danh sách project / tech / role | **[CẦN DỮ LIỆU]** | Ít nhưng chính xác, không tạo card fake |
| PDF CV | Optional | Ẩn Resume CTA khi chưa có |
| Spotify auth | Optional | Hide/approved fallback; không chèn bài hát giả |
| Guestbook moderation rules | Phase 2 | Chỉ build UI placeholder có nhãn rõ nếu chưa bật backend |
| Domain & DNS ownership | Chưa xác minh | Không khẳng định domain đã kích hoạt |

---

## 14. Source/reference links — tập hợp đầy đủ để đưa cho Codex

### 14.1. 10 nguồn inspiration (bắt buộc đối chiếu)

1. **[I01 — Preloader screenshot](references/01-preloader.png)** — không có URL công khai. Yêu cầu: fullscreen 0–100 + thin bar + uppercase caption.
2. **[I02 — Majd Portfolio](https://majd-portfolio.framer.website/)** — giant monochrome typography, warm off-white palette, minimal editorial style. Ảnh: [02-majd-hero.png](references/02-majd-hero.png).
3. **[I03 — Achint Verma Portfolio](https://achint.vercel.app/)** — skill bubble interactions, curved kinetic marquee, optional blue fluid orb. Ảnh: [03-achint-marquee.png](references/03-achint-marquee.png), [04-achint-orb.png](references/04-achint-orb.png).
4. **[I04 — Floating glass navbar screenshot](references/05-glass-navbar.png)** — không có URL công khai. Centered floating pill, translucent dark glass, active sliding pill.
5. **[I05 — Behind the Curtains screenshot](references/06-behind-the-curtains.png)** — không có URL công khai. GitHub + Guestbook + Spotify three-card dark dashboard.
6. **[I06 — Mini scroll progress screenshot](references/07-mini-scroll-progress.png)** — không có URL công khai. Fixed centered 120–160px / 2px line.
7. **[I07 — Junaid Jamel](https://www.junaidjamel.com/#process)** — About portrait two-column, heading, typography inspiration. Ảnh: [08-junaid-about.png](references/08-junaid-about.png). (Anchor là URL được người dùng gửi; ảnh họ chọn là khu vực About.)
8. **[I08 — Thinh Le](https://thinh.io.vn/portfolio)** — inverted zoom cursor. Ảnh: [09-inverted-cursor.png](references/09-inverted-cursor.png).
9. **[I09 — Sayeed Joy](https://sayeedjoy.com/)** — contact chat bubbles and live footer. Ảnh: [10-sayeed-contact.png](references/10-sayeed-contact.png).
10. **[I10 — Ganesh Angadi](https://ganeshangadi.online/)** — giant terminal-styled hero + circular gold spotlight. Ảnh: [11-ganesh-hero.png](references/11-ganesh-hero.png).

> Trong bản `plan.md` độc lập (không kèm ZIP), các liên kết `references/*.png` không mở được vì screenshot không nằm cùng thư mục. Sử dụng **bản ZIP** để có đủ 11 ảnh ở đúng relative path.

### 14.2. Official implementation documentation (tài liệu công nghệ, không phải yêu cầu copy UI)

- **Next.js App Router:** https://nextjs.org/docs/app
- **Next.js `next/font`:** https://nextjs.org/docs/app/getting-started/fonts
- **Tailwind CSS + Next.js:** https://tailwindcss.com/docs/installation/framework-guides/nextjs
- **Motion for React:** https://motion.dev/docs/react
- **Motion scroll animation / `useScroll`:** https://motion.dev/docs/react-scroll-animations
- **Motion drag:** https://motion.dev/docs/react-drag
- **MDN `mix-blend-mode`:** https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
- **MDN `prefers-reduced-motion`:** https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- **MDN SVG `textPath`:** https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath
- **GSAP (optional):** https://gsap.com/docs/v3/
- **React Three Fiber (orb optional):** https://r3f.docs.pmnd.rs/
- **GitHub REST API:** https://docs.github.com/en/rest
- **Supabase:** https://supabase.com/docs
- **Spotify Web API:** https://developer.spotify.com/documentation/web-api
- **Web accessibility / WCAG 2.2:** https://www.w3.org/TR/WCAG22/
- **web.dev Core Web Vitals:** https://web.dev/articles/vitals

### 14.3. Thứ tự xem reference khi bắt đầu UI

1. Mở `11-ganesh-hero.png` + `02-majd-hero.png` trước để hiểu hình thái **Hero, color, hierarchy**.
2. Mở `05-glass-navbar.png`, `07-mini-scroll-progress.png`, `09-inverted-cursor.png` để xây **global interaction**.
3. Mở `08-junaid-about.png` và `10-sayeed-contact.png` để chuẩn hóa **editorial layout và typography**.
4. Mở `03-achint-marquee.png`, `06-behind-the-curtains.png` để xây 3 dark sections thống nhất.
5. Mở `04-achint-orb.png` **chỉ nếu** người dùng quyết định thêm optional playground.

---

## 15. Handoff instruction cho Codex (sử dụng trong Plan Mode)

> **Project:** `hienlnt.id.vn` — independent Software Engineer portfolio. Treat this `plan.md` and the 11 referenced screenshots as the source of truth for agreed design. Work in **Plan Mode first**, do not code until implementation is explicitly approved. Use Next.js App Router + React + TypeScript + Tailwind CSS + Motion. Implement the 00→08 page order, floating centered Apple-like glass navbar, short top-centered progress line, adaptive inverted/zooming cursor, gold hero spotlight, draggable tech bubbles, curved kinetic marquee, Behind the Curtains 3 cards, minimal chat-bubble contact, Vietnam local-time footer. Do not substitute generic Skills grid for the interactive carousel or a full-width progress bar for the mini bar. Do not replace chat-bubble Contact with a dark form or a 3D orb. Do not invent work experience, projects or social URLs. Honor reduced motion, keyboard, mobile, performance and data/security fallback. Follow Phase 0→3 gates and check the acceptance list before claiming completion.

**Kết thúc plan:** tài liệu thiết kế và kỹ thuật đã hoàn chỉnh theo thông tin trong cuộc trò chuyện; chưa tạo source code hoặc triển khai hosting.
