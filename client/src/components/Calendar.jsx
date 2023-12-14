import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";

function Calendar(){
    return(
        <div>
            <Fullcalendar 
            plugins={[dayGridPlugin,timeGridPlugin,InteractionPlugin]}
            initialView={'dayGridMonth'}
            headerToolbar={
                {
                    start: 'today prev,next', // will normally be on the left. if RTL, will be on the right
                    center: 'title',
                    end: "dayGridMonth, timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
                  }

            }
            />
        </div>
    )
}

export default Calendar