import { useMemo, useState, type CSSProperties } from "react";
import { axes, investorTypes, questions } from "./diagnosisData";
import {
  buildShareText,
  buildXShareUrl,
  calculateAxisMaximums,
  getDiagnosisResult,
  getProgressPercent,
  getScorePosition,
} from "./diagnosisLogic";
import type { AxisKey, Scores } from "./types";

type View = "intro" | "question" | "result";

const typePortraits = import.meta.glob(["../assets/type-portraits/R*.png", "../assets/type-portraits/S*.png"], {
  import: "default",
  query: "?url",
}) as Record<string, () => Promise<string>>;

const shareCardImages = import.meta.glob(["../assets/share-cards/R*.png", "../assets/share-cards/S*.png"], {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const titleHeroImages = import.meta.glob("../assets/title-hero.*", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const introTypeCodes = Object.keys(investorTypes);
const titleHeroImage = titleHeroImages["../assets/title-hero.png"];

async function getTypePortrait(code: string) {
  const loadPortrait = typePortraits[`../assets/type-portraits/${code}.png`];

  return loadPortrait?.();
}

function getShareCardImage(code: string) {
  return shareCardImages[`../assets/share-cards/${code}.png`];
}

function loadCanvasImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    image.src = src;
  });
}

function drawContainedImage(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  width: number,
  height: number,
) {
  const imageRatio = image.width / image.height;
  const targetRatio = width / height;
  const drawWidth = imageRatio > targetRatio ? width : height * imageRatio;
  const drawHeight = imageRatio > targetRatio ? width / imageRatio : height;
  const drawX = x + (width - drawWidth) / 2;
  const drawY = y + (height - drawHeight) / 2;

  context.drawImage(image, drawX, drawY, drawWidth, drawHeight);
}

function drawRoundedRectangle(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function drawWrappedText(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines: number,
) {
  let line = "";
  let lineCount = 0;

  for (const character of text) {
    const nextLine = `${line}${character}`;
    if (context.measureText(nextLine).width > maxWidth && line) {
      context.fillText(line, x, y);
      y += lineHeight;
      line = character;
      lineCount += 1;

      if (lineCount >= maxLines - 1) {
        break;
      }
    } else {
      line = nextLine;
    }
  }

  if (line && lineCount < maxLines) {
    context.fillText(line, x, y);
  }
}

async function downloadResultCardImage(result: ReturnType<typeof getDiagnosisResult>, portraitUrl: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 675;
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Canvas is not supported");
  }

  const portrait = await loadCanvasImage(portraitUrl);
  const [primaryColor, secondaryColor] = result.type.colors;

  context.fillStyle = "#f8f0dc";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, `${primaryColor}3f`);
  gradient.addColorStop(0.48, "#f8f0dc");
  gradient.addColorStop(1, `${secondaryColor}45`);
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "rgba(255, 253, 246, 0.48)";
  drawRoundedRectangle(context, 34, 34, canvas.width - 68, canvas.height - 68, 28);
  context.fill();

  context.strokeStyle = "rgba(90, 57, 40, 0.34)";
  context.lineWidth = 4;
  drawRoundedRectangle(context, 34, 34, canvas.width - 68, canvas.height - 68, 28);
  context.stroke();

  context.fillStyle = "#fffaf0";
  drawRoundedRectangle(context, 690, 78, 412, 456, 24);
  context.fill();
  context.strokeStyle = "rgba(90, 57, 40, 0.28)";
  context.lineWidth = 3;
  drawRoundedRectangle(context, 690, 78, 412, 456, 24);
  context.stroke();
  drawContainedImage(context, portrait, 706, 94, 380, 424);

  context.fillStyle = "rgba(255, 250, 240, 0.86)";
  drawRoundedRectangle(context, 714, 546, 364, 60, 18);
  context.fill();
  context.fillStyle = "#5a3928";
  context.font = "900 28px Hiragino Sans, Yu Gothic, sans-serif";
  context.textAlign = "center";
  context.fillText(result.code, 896, 584);
  context.textAlign = "left";

  context.fillStyle = "#5a3928";
  context.font = "800 27px Hiragino Sans, Yu Gothic, sans-serif";
  context.fillText("投資家タイプ診断", 76, 92);

  context.fillStyle = primaryColor;
  drawRoundedRectangle(context, 76, 122, 154, 48, 24);
  context.fill();
  context.fillStyle = "#fffaf0";
  context.font = "900 27px Hiragino Sans, Yu Gothic, sans-serif";
  context.fillText(result.code, 104, 154);

  context.fillStyle = "#241a13";
  context.font = "900 74px Hiragino Mincho ProN, Yu Mincho, serif";
  drawWrappedText(context, result.type.role, 76, 255, 560, 84, 2);

  context.fillStyle = "#3a2a1e";
  context.font = "800 31px Hiragino Sans, Yu Gothic, sans-serif";
  drawWrappedText(context, `「${result.type.shareLine}」`, 76, 410, 550, 42, 2);

  context.fillStyle = "rgba(255, 250, 240, 0.78)";
  drawRoundedRectangle(context, 76, 474, 554, 86, 18);
  context.fill();
  context.fillStyle = "#5a3928";
  context.font = "800 21px Hiragino Sans, Yu Gothic, sans-serif";
  context.fillText("好みやすい投資法", 102, 509);
  context.font = "900 25px Hiragino Sans, Yu Gothic, sans-serif";
  drawWrappedText(context, result.type.preferredMethods.slice(0, 3).join(" / "), 102, 544, 500, 32, 1);

  context.fillStyle = "#8f3f36";
  context.font = "900 25px Hiragino Sans, Yu Gothic, sans-serif";
  context.fillText("#投資家タイプ診断 #投資スタイル", 76, 612);

  const link = document.createElement("a");
  link.download = `investor-type-${result.code}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function downloadImageUrl(url: string, filename: string) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = url;
  link.click();
}

export function App() {
  const [view, setView] = useState<View>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [imageStatus, setImageStatus] = useState("画像を保存");

  const answered = answers.length;
  const total = questions.length;
  const progressWidth = `${getProgressPercent(answered, total)}%`;
  const result = useMemo(() => {
    if (answers.length < questions.length) return null;
    return getDiagnosisResult(answers);
  }, [answers]);
  const xShareUrl = result ? buildXShareUrl(buildShareText(result), window.location.href) : "";

  function startDiagnosis() {
    setCurrent(0);
    setAnswers([]);
    setImageStatus("画像を保存");
    setView("question");
  }

  function resetDiagnosis() {
    setCurrent(0);
    setAnswers([]);
    setImageStatus("画像を保存");
    setView("intro");
  }

  function answerQuestion(value: number) {
    const nextAnswers = [...answers];
    nextAnswers[current] = value;
    setAnswers(nextAnswers);

    if (current === questions.length - 1) {
      setView("result");
      return;
    }

    setCurrent((value) => value + 1);
  }

  function goBack() {
    if (current === 0) return;
    setAnswers((value) => value.slice(0, -1));
    setCurrent((value) => value - 1);
  }

  async function downloadShareImage() {
    if (!result) return;

    try {
      setImageStatus("作成中...");
      const shareCardImage = getShareCardImage(result.code);

      if (shareCardImage) {
        downloadImageUrl(shareCardImage, `investor-type-${result.code}.png`);
      } else {
        const portraitUrl = await getTypePortrait(result.code);

        if (!portraitUrl) {
          throw new Error(`Missing portrait image: ${result.code}`);
        }

        await downloadResultCardImage(result, portraitUrl);
      }

      setImageStatus("保存しました");
      window.setTimeout(() => setImageStatus("画像を保存"), 1400);
    } catch {
      setImageStatus("保存不可");
    }
  }

  return (
    <main className="app-shell">
      <section className="diagnosis-panel" aria-labelledby="app-title">
        <header className="topbar">
          <div>
            <p className="kicker">16タイプ診断</p>
            <h1 id="app-title">投資家タイプ診断</h1>
          </div>
          <div className="progress-card" aria-live="polite">
            <span>{answered} / {total}</span>
            <div className="progress-track" aria-hidden="true">
              <div className="progress-fill" style={{ width: progressWidth }} />
            </div>
          </div>
        </header>

        {view === "intro" && (
          <section className="view active">
            <div className="intro-layout">
              <div className="intro-copy">
                <div className="chapter-badge">16 Investor Types</div>
                <h2>
                  <span>投資のクセから、</span>
                  <span>あなたのタイプが見えてくる。</span>
                </h2>
                <p>
                  値動きへの向き合い方、時間軸、投資への関わり方、求めるリターンから、
                  あなたが心地よく続けやすい投資タイプを整理します。
                </p>
                <div className="intro-axis-grid" aria-label="診断で見る4つの軸">
                  <span>安定重視 ↔ 成長重視</span>
                  <span>短期重視 ↔ 長期重視</span>
                  <span>おまかせ運用 ↔ 自分で選ぶ</span>
                  <span>インカム重視 ↔ 値上がり重視</span>
                </div>
                <div className="intro-footer">
                  <p>20問・約3分。投資助言ではなく、自己理解のための診断です。</p>
                  <button className="primary-button" type="button" onClick={startDiagnosis}>
                    <span aria-hidden="true">✦</span>
                    診断を始める
                  </button>
                </div>
              </div>
              <div className="hero-card" aria-hidden="true">
                {titleHeroImage ? (
                  <img className="hero-main-image" src={titleHeroImage} alt="" />
                ) : (
                  <div className="hero-mosaic">
                    {introTypeCodes.map((code) => {
                      const cardImage = getShareCardImage(code);

                      return cardImage ? <img key={code} src={cardImage} alt="" /> : null;
                    })}
                  </div>
                )}
                <div className="hero-caption">
                  <span>4 Axes / 16 Types</span>
                  <strong>Investor Archive</strong>
                </div>
              </div>
            </div>
          </section>
        )}

        {view === "question" && (
          <QuestionView current={current} onAnswer={answerQuestion} onBack={goBack} />
        )}

        {view === "result" && result && (
          <ResultView
            imageStatus={imageStatus}
            result={result}
            xShareUrl={xShareUrl}
            onDownloadImage={downloadShareImage}
            onRestart={resetDiagnosis}
          />
        )}
      </section>
    </main>
  );
}

function QuestionView({
  current,
  onAnswer,
  onBack,
}: {
  current: number;
  onAnswer: (value: number) => void;
  onBack: () => void;
}) {
  const question = questions[current];
  const axis = axes[question.axis];

  return (
    <section className="view active" aria-live="polite">
      <div className="question-scroll">
        <div className="question-meta">
          <span className="axis-badge">{axis.label}</span>
          <span>Question {current + 1}</span>
        </div>
        <h2 className="question-title">{question.text}</h2>
        <div className="choice-grid">
          {question.choices.map((choice) => (
            <button
              className="choice-button"
              key={choice.text}
              type="button"
              onClick={() => onAnswer(choice.value)}
            >
              {choice.text}
            </button>
          ))}
        </div>
        <div className="nav-row">
          <button
            className="ghost-button"
            disabled={current === 0}
            style={{ visibility: current === 0 ? "hidden" : "visible" }}
            type="button"
            onClick={onBack}
          >
            戻る
          </button>
        </div>
      </div>
    </section>
  );
}

function ResultView({
  imageStatus,
  result,
  xShareUrl,
  onDownloadImage,
  onRestart,
}: {
  imageStatus: string;
  result: ReturnType<typeof getDiagnosisResult>;
  xShareUrl: string;
  onDownloadImage: () => void;
  onRestart: () => void;
}) {
  const axisProfiles = (Object.entries(axes) as [AxisKey, (typeof axes)[AxisKey]][]).map(([key, axis]) => {
    const value = result.scores[key];
    const leaning = value >= 0 ? axis.right : axis.left;

    return {
      key,
      label: axis.label,
      leaning,
    };
  });
  const resultStyle = {
    "--avatar-a": result.type.colors[0],
    "--avatar-b": result.type.colors[1],
  } as CSSProperties;
  const shareCardImage = getShareCardImage(result.code);

  return (
    <section className="view active result-view" style={resultStyle}>
      <article className="result-main">
        {shareCardImage && (
          <div className="result-hero-card">
            <img src={shareCardImage} alt={`${result.type.role}の診断結果カード`} />
          </div>
        )}

        {!shareCardImage && (
          <div className="result-hero">
          <div className="result-copy">
            <p className="kicker">診断結果</p>
            <p className="result-code">{result.code}</p>
            <h2>{result.type.role}</h2>
            <p className="character-line">「{result.type.shareLine}」</p>
            <div className="preferred-methods" aria-label="好みやすい投資法">
              <span>好みやすい投資法</span>
              <div>
                {result.type.preferredMethods.map((method) => (
                  <strong key={method}>{method}</strong>
                ))}
              </div>
            </div>
            <div className="type-pill-row" aria-label="タイプ傾向">
              {axisProfiles.map((profile) => (
                <span className="type-pill" key={profile.key}>
                  <strong>{profile.label}</strong>
                  {profile.leaning}
                </span>
              ))}
            </div>
          </div>
          <div className="result-portrait-panel">
            <div className={`type-character portrait-character motif-${result.type.motif}`} aria-hidden="true">
              <div className="character-badge">{result.type.mark}</div>
              <div className="character-halo" />
              <div className="character-hat" />
              <div className="character-head">
                <span className="character-eye eye-left" />
                <span className="character-eye eye-right" />
              </div>
              <div className="character-collar" />
              <div className="character-body" />
              <div className="character-arm arm-left" />
              <div className="character-arm arm-right" />
              <div className="character-prop" />
              <div className="character-leg leg-left" />
              <div className="character-leg leg-right" />
            </div>
          </div>
          </div>
        )}

        <div className="result-content-grid">
          <section className="result-section result-section-primary">
            <p className="section-kicker">Profile</p>
            <h3>このタイプの輪郭</h3>
            <p className="profile-summary">{result.type.summary}</p>
            <div className="traits-block">
              <article>
                <h4>強み</h4>
                <p>{result.type.strength}</p>
              </article>
              <article>
                <h4>気をつけたいクセ</h4>
                <p>{result.type.watchout}</p>
              </article>
            </div>
          </section>

          <aside className="result-side">
            <h3>4軸スコア</h3>
            <ScoreBars scores={result.scores} />
          </aside>

          <section className="result-section advice-block">
            <p className="section-kicker">Next Action</p>
            <h3>振り返りポイント</h3>
            <ul>
              {result.advice.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="result-section related-section">
            <p className="section-kicker">Perspective</p>
            <h3>一緒に見るとバランスが取れるタイプ</h3>
            <div className="related-grid">
              {result.relatedTypes.map((related) => (
                <article className={`related-card related-${related.kind}`} key={related.kind}>
                  <span>{related.label}</span>
                  <strong>{related.type.role}</strong>
                  <em>{related.code}</em>
                  <p>{related.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="result-section share-section">
            <p className="section-kicker">Share</p>
            <h3>結果を投稿する</h3>
            <p>結果カード画像を保存して、X投稿に添付できます。Xで共有を開くと、投稿文は自動で入ります。</p>
            <div className="button-row">
              <button className="primary-button" type="button" onClick={onRestart}>
                <span aria-hidden="true">↺</span>
                もう一度診断する
              </button>
              <button className="ghost-button" type="button" onClick={onDownloadImage}>
                {imageStatus}
              </button>
              <a className="ghost-button share-link" href={xShareUrl} rel="noreferrer" target="_blank">
                Xで共有
              </a>
            </div>
            <ShareCardPreview result={result} shareCardImage={shareCardImage} />
          </section>
        </div>
      </article>
    </section>
  );
}

function ShareCardPreview({
  result,
  shareCardImage,
}: {
  result: ReturnType<typeof getDiagnosisResult>;
  shareCardImage?: string;
}) {
  if (shareCardImage) {
    return (
      <div className="share-card-preview share-card-preview-image" aria-label="保存される画像カードのプレビュー">
        <img src={shareCardImage} alt={`${result.type.role}の投稿用結果カード`} />
      </div>
    );
  }

  return (
    <div className="share-card-preview" aria-label="保存される画像カードのプレビュー">
      <div className="share-card-copy">
        <span className="share-card-kicker">投資家タイプ診断</span>
        <strong className="share-card-code">{result.code}</strong>
        <h4>{result.type.role}</h4>
        <p>「{result.type.shareLine}」</p>
        <div className="share-card-methods">
          <span>好みやすい投資法</span>
          <strong>{result.type.preferredMethods.slice(0, 3).join(" / ")}</strong>
        </div>
        <em>#投資家タイプ診断 #投資スタイル</em>
      </div>
      <div className="share-card-image">
        <span>{result.code}</span>
      </div>
    </div>
  );
}

function ScoreBars({ scores }: { scores: Scores }) {
  const axisMaximums = calculateAxisMaximums();

  return (
    <div className="score-bars">
      {(Object.entries(axes) as [AxisKey, (typeof axes)[AxisKey]][]).map(([key, axis]) => {
        const value = scores[key];
        const position = getScorePosition(value, axisMaximums[key]);

        return (
          <div className="score-group" key={key}>
            <div className="score-axis">
              <strong>{axis.label}</strong>
              <p>{axis.description}</p>
            </div>
            <div className="score-label">
              <span>{axis.left}</span>
              <span>{axis.right}</span>
            </div>
            <div className="score-track">
              <span className="score-dot" style={{ left: `${position}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
