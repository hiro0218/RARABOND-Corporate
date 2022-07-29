import "./style.css"

const Contents = () => {
  return (
    <>
      <section className="section">
        <h2 className="section__title">サービスの内容</h2>
        <div className="o-container">
          <h3>健康状態や病状の観察・相談</h3>
          <ul>
            <li>血圧・体温・脈拍などの測定</li>
            <li>かかりつけ医の指導に基づく医療処置</li>
            <li>内服管理・食事指導</li>
          </ul>
          <h3>医療機器の管理・処置</h3>
          <ul>
            <li>点滴やカテーテルなどの医療処置</li>
            <li>在宅酸素や人工呼吸器の管理</li>
          </ul>
          <h3>療養上のお世話</h3>
          <ul>
            <li>身体の清拭や入浴介助</li>
          </ul>
          <h3>医療・介護の相談</h3>
          <ul>
            <li>ご家族の状況に配慮した介護指導や様々な相談対応</li>
          </ul>
          <h3>在宅でのリハビリテーション</h3>
          <ul>
            <li>拘縮予防や機能の回復、嚥下機能訓練等</li>
          </ul>
          <h3>ターミナルケア</h3>
          <ul>
            <li>自宅で過ごせるような適切なサポート</li>
          </ul>
        </div>
      </section>
      <section className="section">
        <h2 className="section__title">訪問看護サービスの流れ</h2>
        <div className="usecase-figure">
          <img src="assets/images/service-flow.png" className="usecase-figure__image" alt="訪問看護サービスフロー図" />
        </div>
        <div className="o-container">
          <ul className="usecase-notice u-unstyled-list">
            <li>※主治医等を介さず直接「なちゅらる」へお問い合わせ頂いても構いません</li>
            <li>
              ※入院中の方が、退院後に訪問看護のご利用を検討される場合は、訪問看護師が病院に伺い医師、病院看護師などと相談の上、退院後の生活、在宅医療、訪問看護利用の調整を致します
            </li>
          </ul>
        </div>
      </section>
      <section className="section">
        <h2 className="section__title">訪問対象者</h2>
        <div className="o-container">
          <h3>介護保険対象の方</h3>
          <table className="target-price-list">
            <tbody>
              <tr>
                <th className="target-price-list__head">看護</th>
                <td className="target-price-list__data">30分 4,690円 / 1時間 8,190円</td>
              </tr>
              <tr>
                <th className="target-price-list__head">リハビリ</th>
                <td className="target-price-list__data">20分 2,970円</td>
              </tr>
            </tbody>
          </table>

          <h3>医療保険対象の方</h3>
          <table className="target-price-list">
            <tbody>
              <tr>
                <th className="target-price-list__head">看護</th>
                <td className="target-price-list__data">
                  週3日まで5,550円/回<br />
                  週4日以降6,550円/回
                </td>
              </tr>
              <tr>
                <th className="target-price-list__head">別途</th>
                <td className="target-price-list__data">
                  訪問看護管理療養費<br />
                  月の初回 7,440円/月<br />
                  2回目以降 3,000円/月
                </td>
              </tr>
            </tbody>
          </table>
          <ul className="u-unstyled-list">
            <li>※負担割合に沿った自己負担があります</li>
            <li>※別途加算あり</li>
          </ul>
        </div>
      </section>
      <section className="section">
        <h2 className="section__title">訪問エリア</h2>
        <div className="o-container">
          <div className="visiting-area">
            <div className="visiting-area__text">宮崎市内<br />（田野町・高岡町を除く）</div>
            <ul className="u-unstyled-list">
              <li className="visiting-area__text-sub">※その他の地域でもご相談ください</li>
              <li className="visiting-area__text-sub">※緊急時24時間365日対応いたします</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <h2 className="section__title">アクセス</h2>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13546.324429991124!2d131.4340516!3d31.917977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd06f68306503ab3!2z44Gq44Gh44KF44KJ44KL!5e0!3m2!1sja!2sjp!4v1598759871203!5m2!1sja!2sjp"
            width="100%"
            height="450"
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </section>
      <section className="section">
        <h2 className="section__title">会社概要</h2>
        <div className="o-container">
          <table className="about-list">
            <tbody>
              <tr>
                <th className="about-list__title">営業時間</th>
                <td className="about-list__data">月曜日〜金曜日 / 8:30〜17:30</td>
              </tr>
              <tr>
                <th className="about-list__title">定休日</th>
                <td className="about-list__data">土日祝日・お盆・年末年始</td>
              </tr>
              <tr>
                <th className="about-list__title">所在地</th>
                <td className="about-list__data">
                  〒880-0879<br />
                  宮崎県宮崎市宮崎駅東 3-2-2 セリオ203
                </td>
              </tr>
              <tr>
                <th className="about-list__title">連絡先</th>
                <td className="about-list__data">
                  電話: <a href="tel:0985777680">0985-77-7680</a><br />
                  FAX: 0985-77-7681<br />
                  e-mail: <a href="mailto:natural.0901@iaa.itkeeper.ne.jp">natural.0901@iaa.itkeeper.ne.jp</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Contents
