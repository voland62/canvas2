(ns wonderful-lib.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as async :refer [chan put! pipe unique merge map< filter< alts!]]))

;(:require [wonderful-lib.types :as my-types])

;(println "namespace wonderful-lib.core is starting loading...")


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




;(println "namespace wonderful-lib.core has been loaded")

;;;;;;;;;;;;;;;;;;;;;;;;;



(.clearRect context 0 0 (.-width canvas) (.-height canvas))


(defn order [n]
  (let [ln-3 (Math/log 3)]
    (-> n Math/log (/ ln-3) Math/ceil)))

(defn positive-numbers
  ([] (positive-numbers 1))
  ([n] (cons n (lazy-seq (positive-numbers (inc n))))))


(defn greeting
  ([] (greeting "Hello" "world"))
  ([name] (greeting "Hello" name))
  ([salutation name] (str salutation ", " name "!")))



(defn kantor-lines [base max-depth]
  (if (> max-depth 0)
   (let [third (/ base 3)] (apply conj
                                  (kantor-lines third (dec max-depth))
                                  [third (* 2 third)]
                                  (kantor-lines third (dec max-depth))))))

(defn kantor-lines-2 [[base-start base-end :as base] max-depth]
  (if (> max-depth 0)
    (let [third (/ (- base-end base-start) 3)
          s-1 (+ base-start third)
          s-2 (+ s-1 third)]
      (apply conj
             (kantor-lines-2 [base-start s-1] (dec max-depth))
             [s-1 s-2]
             (kantor-lines-2 [s-2 base-end] (dec max-depth))))))

(kantor-lines-2 [0 3] 4)


(defn draw-kantor-lines [segments]
  (doseq [[segment-start segment-end] segments]
    (.beginPath context)
    (.moveTo context segment-start 100)
    (.lineTo context segment-end 100)
    (.stroke context)))

;(draw-kantor-lines (kantor-lines-2 [0 300] 3))




;;---  key handlers based on async chanals ------

;; -------------------------------------------------------------------------------
;; Key events handling

(def keycodes
  "Keycodes that interest us. Taken from
  http://docs.closure-library.googlecode.com/git/closure_goog_events_keynames.js.source.html#line33"
  {37 :left
   38 :up
   39 :right
   40 :down
   32 :space
   13 :enter})


(defn callback [e]
  (let [key-code (.-keyCode e)]
    (println key-code)
    (.log js/console key-code)))


(defn keyboard-chan []
  (let [ch (chan)]
    (.addEventListener (.-body js/document) "keydown" callback)))


(defn event->key
  [e]
  (keycodes (.-keyCode e) :key-not-found))


#_(defn event-chan
  ([event-type] (event-chan event-type identity))
  ([event-type parse-event]
     (let [ev-chan (chan)]
       (.addEventListener (.-body js/document)
                          event-type
                          #(put! ev-chan parse-event %)))))


;;(event-chan "keydown" (fn [e] (println e)))


#_(defn key-chan
  [event-type allowed-keys]
  (let [evs (event-chan event-type event->key)]
    (filter< allowed-keys evs)))




#_(defn keys-up-chan []
  (key-chan "keyup" #{:left :right :up :down}))


;(keys-up-chan)






#_(.addEventListener (.-body js/document) "keydown"
                   (fn [e] (println "this is keydown listener on canvas element"
                                   (.-target e)
                                   (.-currentTarget e))) false)




#_(.addEventListener canvas "click"
                   (fn [e] (println "and this is one more" e)) false)
