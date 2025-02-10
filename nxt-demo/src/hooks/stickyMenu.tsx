import { useState, useEffect } from "react";

type Props = {
  threshold: number
}

export const StickyMenu = ({ threshold }: Props) => {
  // isStickyというstateを定義。デフォルトはfalse（非固定状態）
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    // スクロールイベントのハンドラー定義。
    // スクロール位置がthresholdを超えるとisStickyをtrueに設定
    const handleScroll = () => {
      const currentScrollY = window.scrollY // 現在のスクロール位置を取得
      setIsSticky(currentScrollY > threshold) // 現在位置が閾値を超えていればisStickyをtrueに
    }

    // スクロールイベントにhandleScrollを登録
    window.addEventListener('scroll', handleScroll)

    // コンポーネントアンマウント時にイベントリスナーを削除
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold]) // thresholdが変更されたらuseEffectを再実行

  // isStickyがtrueならpositionをfixedにし、
  // そうでなければrelativeに設定
  return <div style={{ position: isSticky ? 'fixed' : 'relative' }}>test{/* Menu content */}</div>
}
