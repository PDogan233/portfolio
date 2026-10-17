# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

Personal academic portfolio site for 张家豪 (Jiahao Zhang), a PhD student at Zhejiang University. The site is hosted via GitHub Pages at `pdogan233.github.io/portfolio/`.

## Resume Source

Whenever the user says the resume has been updated, they authorize reading the current documents and other agents' work records under:

`D:\Users\PDOGAN\OneDrive\Files\Job\简历`

Read the latest local files again, especially if the user pauses to update them. The three current resume variants are:

`D:\Users\PDOGAN\OneDrive\Files\Job\简历\简历-张家豪-浙大-博士-电子科学技术.pdf`

The other two PDFs use the same basename with `-光电系统` and `-感知图像` suffixes. Use the general resume as the primary public-site baseline, the targeted variants for relevant technical detail, and `补充信息.docx` for detailed papers, patents, awards and links. The matching PPTX files are editable source versions. `Agent工作记录/` and the source folder's `AGENTS.md` help identify changes and confirmed decisions; distinguish their latest confirmations from historical notes, and verify facts against the current documents. Do not let older company-specific decks or `archive/` overwrite current facts.

This authorization is for reading source material and updating this website, not editing the external resume folder or publishing its contents wholesale. Do not copy identity documents, phone numbers, home addresses, family information, job-search strategy or internal agent notes onto the public site. The proof-material PDF is not a public content source. The PDF copy under `docs/` may be older unless it has been explicitly synchronized.

## Latest Confirmed Content State (2026-10-17)

The following details come from the latest local resumes, supplemental information and explicit user decisions. Treat them as the current confirmed baseline until the user supplies newer materials or corrections.

- **Personal page structure**: Keep `教育背景`, `个人优势`, `科研成果`, `荣誉奖项`, `学术经历与社会工作`, and `补充链接` as separate sections. Do not duplicate the research-output or honor summaries inside the education cards.
- **Preserve format**: Update existing modules and tables only; keep the current navigation, section order, card styles, CSS and JS. Do not redesign the site for one targeted resume.
- **Personal highlights**: BUPT undergraduate major rank 1; recommended directly to Zhejiang University for the PhD; current professional academic rank top 3% (6/167), weighted coursework score 91.7. Use this user-confirmed percentage as supplied. The confirmed summary is 12 first-author outputs, including 8 journal/international-conference papers (3 CAS Q1 TOP papers and 2 international conference paper awards), 3 patents (2 granted, 1 public), and 1 submitted paper. The latest local honor summary is 32 awards, including 13 international/national awards and 9 first-prize awards/scholarships; this supersedes the earlier conversation's 8.
- **Research/skills wording**: `系统建模与信号处理`, `物理启发的 AI 算法`, `集成光电子 AI 计算`; includes denoising, digital twins, physics-based AI, PINN/AI4Science, hybrid optoelectronic neural networks, photonic chaos/reservoirs, and CNN/RNN/Transformer. Do not infer specific Transformer projects from a skill keyword. The general resume's proposed thesis is `基于物理驱动神经网络的光电系统信号处理与系统监测技术`; keep its proposed status.
- **Mentor title override**: The user explicitly chose the official wording for 张鹿: `竺可桢学院副院长、电子系副系主任`, verified at `https://mypage.zju.edu.cn/luzhang`, rather than the resume's abbreviated `副院长、系主任`.
- **Academic/service highlights**: Elsevier `Computers & Electrical Engineering` reviewer (IF 4.9, Q1); 11 conference participations, 6 invited/oral/poster presentations, and 3 domestic/international conference/forum awards. The latter adds the 2026.10 全国光通信菁英论坛一等奖 (1st); the international paper/poster awards remain 2 (PGC and ACP). Do not increment participation/presentation counts from an award alone. Participation in EU FLPP, Chinese national key R&D, and Zhejiang Lingyan projects; 360 volunteer hours; roles include learning committee member, 光纤通信与网络 course teaching assistant, and Lab 412 manager; international collaboration includes KTH/RTU/MSU teams.
- **Honor details**: Added 2026.10 全国光通信菁英论坛一等奖, 2026.10 浙江大学优秀研究生, and 2026.11 浙江大学一等奖学金, using the dates supplied by current local documents. Preserve earlier dated award records. The user explicitly requested that the 2025.11 浙江大学一等奖学金 row have no parenthetical rank description; do not restore its old 7% / 14/190 suffix.
- **Projects page order**: `科研项目` must appear before `实习经历`.
- **Research project 2**: Current title is `集成光电子计算与 AI 架构设计`; method is `光子深度储备池神经网络`. Chip tapeout is in progress; do not describe it as completed or mass-produced.
- **Hikvision internship**: The current card is `海康威视 · 研究院 / TOF 深度感知与 AI 图像处理算法`. Preserve its detailed structure: ToF error background; PB-ToF/AMCW-ToF sensor and ISP analysis; IToF Python/GUI automated data collection; self-supervised unlabeled pretraining + labeled finetuning with U-Net/CNN combined with physical/ISP models. Confirmed results: 100,000 samples collected and image MAE reduced from 27.9 to 19.2. Do not invent MAE units, datasets or evaluation conditions, or claim sole project leadership/production deployment.
- **Publication ordering**: The published-paper list currently has 8 entries. `Integrated Computation and Communication with Fiber-optic Transmissions` (2025 ACP) must remain item 6 unless the user requests another ordering.
- **IEEE Photonics Journal DOI**: `Harnessing Channel Physics: A Fiber-Optic Kernel for Integrated Computation and Communication` uses DOI `10.1109/JPHOT.2026.3721155`, even if the DOI landing page is not yet available.
- **Verification baseline (2026-10-17)**: The three pages were checked in Edge at 1440×1000 and 390×844 with no horizontal overflow, broken local resources, console errors, clipping, or overlap. Navigation and all local links passed; CSS and JS are unchanged.

## No Build Step

This is a pure static site — no build tools, no package.json, no dependencies. Open any `.html` file directly in a browser to preview. No server or build step needed.

## File Structure

```
index.html          — Personal info, education background, skills, activities
projects.html       — Research projects and internship experience
publications.html   — Published papers, pending papers, patents, awards/honors
css/style.css       — All styles (CSS custom properties, responsive, single file)
js/main.js          — Active nav link highlighting based on current page pathname
images/             — Personal photo and any other static images
```

## Architecture Notes

- **Shared nav**: All three HTML pages duplicate the same `<nav>` block. If you change the nav, update all three files.
- **CSS variables**: The design system is defined in `:root` in [css/style.css](css/style.css#L4-L17). Colors (`--primary`, `--accent`, `--text`, `--muted`, etc.), spacing, and shadows use these variables throughout.
- **Page detection**: [js/main.js](js/main.js) detects the current page from `window.location.pathname` and applies `.active` to the matching nav link via `data-page` attributes.
- **No shared HTML partials**: Each page is self-contained. There's no templating or build-time includes — the nav duplication is intentional simplicity.
- **Responsive**: A single breakpoint at 700px in [css/style.css](css/style.css#L148) adjusts nav spacing and heading size for smaller screens.
- **Language**: All content is in Simplified Chinese (`lang="zh-CN"`).

## Deployment

GitHub Pages serves this from the repo root. The README links to the live site at `https://pdogan233.github.io/portfolio/`.
