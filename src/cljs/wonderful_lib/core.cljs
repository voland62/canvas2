;;; If this namespace requires macros, remember that ClojureScript's
;;; macros are written in Clojure and have to be referenced via the
;;; :require-macros directive where the :as keyword is required. Even
;;; if you can add files containing macros and compile-time only
;;; functions in the :source-paths setting of the :builds, it is
;;; strongly suggested to add them to the leiningen :source-paths.
(ns wonderful-lib.core
  (:require [wonderful-lib.types :as my-types]))


(my-types/fff)

(defn foo [greeting]
  (if greeting
    (str greeting "ClojureScript!")
    (str "Hello, ClojureScript!")))




;;(.write js/document (foo "Welcome to "))

;;(js/alert "Hello from file")

;;(+ 2 3 201)
(def canvas (.getElementById js/document "myCanvas"))
(def context (.getContext canvas "2d"))

;;(set! (.-fillStyle context) "#ffffaa")
;;(.fillRect context 0 0 500 300)






(defn drawCircle [col]
  (do
    (set! (.-fillStyle context) col)
    (.beginPath context)
    (.arc context 100 100 15 0 (* 2 Math.PI))
    (.fill context)))

(drawCircle "#00ff00")

;; проверить ссылки

(def looping? true)


(defn main-loop []
  (println "aha"))


(defn tick
  [t] (do
        ;;(println "tick" t)
        (main-loop)
        (if looping?
            (js/requestAnimationFrame tick))))

(defn start-loop []
  (do
    (set! looping? true)
    (tick nil)))

(defn stop-loop []
  (set! looping? false))

;;(start-loop)
;;(stop-loop)
