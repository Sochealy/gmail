(ns gmail.mail)

(defn mail []
    [:div {:class "container"}
        [:div {:class "header"}
            [:div {:class "left-header"} 
                [:i {:class "material-icons menuIcon"} "menu"]
                [:i {:class "material-icons gmailLogo"} "email"]
                [:span {:style {:fontSize "25px" :fontFamily "Roboto" :color "#fff"}}"Gmail"]]]
                
            
            
        
        [:div {:class "contentContainer"}
            [:div {:class "nav"}
                [:button {:class "button button1"} 
                  [:i {:class "material-icons composeIcon "} "add"]
                  [:span {:style {:fontFamily "Roboto" :fontSize "15px" :padding "15px 10px"}}"Compose"]]
                [:ul
                    [:li [:i {:class "material-icons navIcon"} "inbox"]
                        [:span {:style {:fontSize "16px" :fontFamily "Roboto" :color "#fff"}}"Inbox"]]
                    
                    [:li [:i {:class "material-icons navIcon"} "star"] 
                        [:span {:style {:fontSize "16px" :fontFamily "Roboto" :color "#fff"}}"Starred"]]
                    [:li [:i {:class "material-icons navIcon"} "history"]  
                        [:span {:style {:fontSize "16px" :fontFamily "Roboto" :color "#fff"}}"Inbox"]]]]]])
        
        
        





        
