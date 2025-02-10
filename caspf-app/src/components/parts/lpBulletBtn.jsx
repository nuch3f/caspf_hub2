import { Fragment } from "react";
import { useEffect, useState } from 'react';
export const LpBulletBtn = () => {
    const LpBulletScroll = () => {
        const paginations = document.querySelectorAll(".pagination a");
        paginations.forEach(pagination => {
            pagination.addEventListener("click", e => {
                e.preventDefault();
                const targetId = e.target.hash;
                const target = document.querySelector(targetId);
                target.scrollIntoView({ behavior: "smooth" });
            });
        });
        // Intersection Observer
        const sections = document.querySelectorAll(".p-lp_sec");
        const observerRoot = document.querySelector(".p-lp_container");
        const options = {
        root: observerRoot,
        rootMargin: "-50% 0px",
        threshold: 0
        };
        const observer = new IntersectionObserver(doWhenIntersect, options);
        sections.forEach(section => {
        observer.observe(section);
        });

        /**
         * 交差したときに呼び出す関数
         * @param entries - IntersectionObserverEntry IntersectionObserverが交差したときに渡されるオブジェクトです。
         */
        function doWhenIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            activatePagination(entry.target);
            }
        });
        }

        /**
         * ページネーションの大きさを変える関数
         * @param element - HTMLElement 現在表示中のスライドのHTML要素を引数に取ります。
         */
        function activatePagination(element) {
        const currentActiveIndex = document.querySelector("#pagination .active");
        if (currentActiveIndex !== null) {
            currentActiveIndex.classList.remove("active");
        }
        const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
        newActiveIndex.classList.add("active");
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', LpBulletScroll)
        return () => window.removeEventListener('scroll', LpBulletScroll)
      }, [])

    return (
    <Fragment>
        <nav id="pagination" className="pagination">
            <a id="pagination1" href="#section1"></a>
            <a id="pagination2" href="#section2"></a>
            <a id="pagination3" href="#section3"></a>
            <a id="pagination4" href="#section4"></a>
        </nav>
    </Fragment>
    );
};