//nctions in here to be used in screen controller event listeners

export default function GameController() {
    
    //only small number of subscribers expected, so array is fine
    const subscribers = [];
    
    function subscribe(callback) {
        subscribers.push(callback);
    };
    
    function removeSubscriber(callback) {
        subscribers = subscribers.filter((item) => item !== callback);
    };

    function publish(data) {
        for (const updateSubscriber of subscribers) {
           updateSubscriber(data);
        }
    };
    
    return {

    }
}