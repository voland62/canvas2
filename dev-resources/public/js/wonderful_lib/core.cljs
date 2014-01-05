(ns wonderful-lib.core
  (:require [wonderful-lib.types :as my-types]))



(println "namespace wonderful-lib.core is starting loading...")


;(my-types/fff)


(defn foo [greeting]
  (if greeting
    (str greeting "ClojureScript!")
    (str "Hello, ClojureScript!")))




;;(.write js/document (foo "Welcome to "))




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

(def looping? false)


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



;;-----------------------------------------


(defn create-vertices [n w h]
  (repeatedly n #(identity (array (rand w) (rand h)))))

(def vertices (create-vertices 100 400 300))

(def triangles (Delaunay/triangulate (to-array vertices)))


(def ttt (->> triangles
              (partition 3)
              (map #(map (partial nth vertices) %))))

(defn draw-tris []
  (doseq [[[p1-x p1-y] [p2-x p2-y] [p3-x p3-y] :as triangle] ttt]
    (.beginPath context)
    (.moveTo context p1-x p1-y)
    (.lineTo context p2-x p2-y)
    (.lineTo context p3-x p3-y)
    (.closePath context)
    (.stroke context)))

(draw-tris)




(println "namespace wonderful-lib.core has been loaded")

;;;;;;;;;;;;;;;;;;;;;;;;;
