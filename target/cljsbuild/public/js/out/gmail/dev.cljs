(ns ^:figwheel-no-load gmail.dev
  (:require
    [gmail.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
