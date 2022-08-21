function EventHandler(events) {
    this.events = events;

    this.getEventsBetweenDates = function(start, end){
        return this.events.filter(function(element){return element.dateStart >= start && element.dateEnd <= end});
    }
    
    this.getByMonth = function(month){
        return this.events.filter(function(element){return element.dateStart.substring(5,7) == month});
    }
    
    this.getUniqueDateAndSort = function(){
        var uniqueDates = [];
        return this.events.reduce(function(uniqueDates, element){
            if((uniqueDates.every(function(uniqueDate)
                {
                    return (uniqueDate.dateStart != element.dateStart || uniqueDate.dateEnd != element.dateEnd)
                }))) 
            {
                console.log(element.dateStart + " and " + element.dateEnd);
                uniqueDates.push(element);
            }
            return uniqueDates;
        }, uniqueDates).sort();
    }
    
    this.getSummary = function(){
        var summary = [];
        if(arguments.length > 0 && arguments[0].constructor === Array){ // if there are arguments and the first argument is an array
            summary = arguments[0];
        }
        else if(this.constructor === Array){ // if the function was called on an array (for chaining)
            summary = this;
        }
        else if(arguments.length == 0) // if there are no arguments (and the function was not called on an array)
        {
            summary = this.events;
        }
        else { // there are arguments and they are assumed to be objects
            summary = Array.prototype.slice.apply(arguments); 
        }
        console.log(summary);
        
        return summary.map(function(element){
            if(element.dateStart == element.dateEnd)
            {
                return "On " + element.dateStart + ": " + element.name + " (" + element.description + ")";
            }
            else {
                return "From " + element.dateStart + " to " + element.dateEnd + ": " + element.name + " (" + element.description + ")";
            }
        });
    }
}



Array.prototype.getEventsBetweenDates = function(start, end){
    return this.events.filter(function(element){return element.dateStart >= start && element.dateEnd <= end});
}

Array.prototype.getByMonth = function(month){
    return this.events.filter(function(element){return element.dateStart.substring(5,7) == month});
}

Array.prototype.getUniqueDateAndSort = function(){
    var uniqueDates = [];
    return this.events.reduce(function(uniqueDates, element){
        if((uniqueDates.every(function(uniqueDate)
            {
                return (uniqueDate.dateStart != element.dateStart || uniqueDate.dateEnd != element.dateEnd)
            }))) 
        {
            console.log(element.dateStart + " and " + element.dateEnd);
            uniqueDates.push(element);
        }
        return uniqueDates;
    }, uniqueDates).sort();
}

Array.prototype.getSummary = function(){
    var summary = [];
    if(arguments.length > 0 && arguments[0].constructor === Array){ // if there are arguments and the first argument is an array
        summary = arguments[0];
    }
    else if(this.constructor === Array){ // if the function was called on an array (for chaining)
        summary = this;
    }
    else if(arguments.length == 0) // if there are no arguments (and the function was not called on an array)
    {
        summary = this.events;
    }
    else { // there are arguments and they are assumed to be objects
        summary = Array.prototype.slice.apply(arguments); 
    }
    console.log(summary);
    
    return summary.map(function(element){
        if(element.dateStart == element.dateEnd)
        {
            return "On " + element.dateStart + ": " + element.name + " (" + element.description + ")";
        }
        else {
            return "From " + element.dateStart + " to " + element.dateEnd + ": " + element.name + " (" + element.description + ")";
        }
    });
}
