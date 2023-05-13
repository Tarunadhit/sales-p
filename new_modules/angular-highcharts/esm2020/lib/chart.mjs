import * as Highcharts from 'highcharts';
import { AsyncSubject } from 'rxjs';
export class Chart {
    constructor(options = { series: [] }) {
        this.options = options;
        this.refSubject = new AsyncSubject();
        this.ref$ = this.refSubject.asObservable();
    }
    /**
     * Add Point
     * @param point         Highcharts.DataPoint, number touple or number
     * @param serieIndex    Index position of series. This defaults to 0.
     * @param redraw        Flag whether or not to redraw point. This defaults to true.
     * @param shift         Shift point to the start of series. This defaults to false.
     */
    addPoint(point, serieIndex = 0, redraw = true, shift = false) {
        this.ref$.subscribe(chart => {
            if (chart.series.length > serieIndex) {
                chart.series[serieIndex].addPoint(point, redraw, shift);
            }
        });
    }
    /**
     * Add Series
     * @param series        Series Configuration
     * @param redraw        Flag whether or not to redraw series. This defaults to true.
     * @param animation     Whether to apply animation, and optionally animation configuration. This defaults to false.
     */
    addSeries(series, redraw = true, animation) {
        this.ref$.subscribe(chart => {
            chart.addSeries(series, redraw, animation);
        });
    }
    /**
     * Remove Point
     * @param pointIndex    Index of Point
     * @param serieIndex    Specified Index of Series. Defaults to 0.
     */
    removePoint(pointIndex, serieIndex = 0) {
        this.ref$.subscribe(chart => {
            if (chart.series.length > serieIndex && chart.series[serieIndex].data.length > pointIndex) {
                chart.series[serieIndex].removePoint(pointIndex, true);
            }
        });
    }
    /**
     * Remove Series
     * @param seriesIndex    Index position of series to remove.
     */
    removeSeries(seriesIndex) {
        this.ref$.subscribe(chart => {
            if (chart.series.length > seriesIndex) {
                chart.series[seriesIndex].remove(true);
            }
        });
    }
    init(el) {
        if (!this.ref) {
            Highcharts.chart(el.nativeElement, this.options, chart => {
                if (!this.ref) { // TODO: workaround for doubled callbacks on exporting charts: issue #238
                    this.refSubject.next(chart);
                    this.ref = chart;
                    this.refSubject.complete();
                }
            });
        }
    }
    destroy() {
        if (this.ref) {
            this.options = this.ref.options;
            this.ref.destroy();
            this.ref = undefined;
            // new init subject
            this.refSubject = new AsyncSubject();
            this.ref$ = this.refSubject.asObservable();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWhpZ2hjaGFydHMvc3JjL2xpYi9jaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBY2hELE1BQU0sT0FBTyxLQUFLO0lBUWhCLFlBQW9CLFVBQThCLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtRQUE1QyxZQUFPLEdBQVAsT0FBTyxDQUFxQztRQVB4RCxlQUFVLEdBQW1DLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEUsU0FBSSxHQUFpQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBTUQsQ0FBQztJQUVwRTs7Ozs7O09BTUc7SUFDSCxRQUFRLENBQUMsS0FBWSxFQUFFLGFBQXFCLENBQUMsRUFBRSxTQUFrQixJQUFJLEVBQUUsUUFBaUIsS0FBSztRQUMzRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsRUFBRTtnQkFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN6RDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsU0FBUyxDQUFDLE1BQW9DLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBRSxTQUFrQjtRQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFdBQVcsQ0FBQyxVQUFrQixFQUFFLFVBQVUsR0FBRyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLEVBQUU7Z0JBQ3pGLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUN4RDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILFlBQVksQ0FBQyxXQUFtQjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFdBQVcsRUFBRTtnQkFDckMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLENBQUMsRUFBYztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNiLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLHlFQUF5RTtvQkFDeEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO29CQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUM1QjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztZQUVyQixtQkFBbUI7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUM1QztJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEhpZ2hjaGFydHMgZnJvbSAnaGlnaGNoYXJ0cyc7XG5pbXBvcnQgeyBBc3luY1N1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEZlbGl4IEl0emVucGxpdHouIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jZWJvci9hbmd1bGFyLWhpZ2hjaGFydHMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICogQGF1dGhvciBGZWxpeCBJdHplbnBsaXR6XG4gKiBAYXV0aG9yIFRpbW90aHkgQS4gUGVyZXogKGNvbnRyaWJ1dG9yKVxuICovXG5leHBvcnQgdHlwZSBQb2ludCA9IG51bWJlciB8IFtudW1iZXIsIG51bWJlcl0gfCBIaWdoY2hhcnRzLlBvaW50O1xuXG5leHBvcnQgY2xhc3MgQ2hhcnQge1xuICBwcml2YXRlIHJlZlN1YmplY3Q6IEFzeW5jU3ViamVjdDxIaWdoY2hhcnRzLkNoYXJ0PiA9IG5ldyBBc3luY1N1YmplY3QoKTtcbiAgcmVmJDogT2JzZXJ2YWJsZTxIaWdoY2hhcnRzLkNoYXJ0PiA9IHRoaXMucmVmU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgYHJlZiRgLlxuICAgKi9cbiAgcmVmOiBIaWdoY2hhcnRzLkNoYXJ0IHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczogSGlnaGNoYXJ0cy5PcHRpb25zID0geyBzZXJpZXM6IFtdIH0pIHt9XG5cbiAgLyoqXG4gICAqIEFkZCBQb2ludFxuICAgKiBAcGFyYW0gcG9pbnQgICAgICAgICBIaWdoY2hhcnRzLkRhdGFQb2ludCwgbnVtYmVyIHRvdXBsZSBvciBudW1iZXJcbiAgICogQHBhcmFtIHNlcmllSW5kZXggICAgSW5kZXggcG9zaXRpb24gb2Ygc2VyaWVzLiBUaGlzIGRlZmF1bHRzIHRvIDAuXG4gICAqIEBwYXJhbSByZWRyYXcgICAgICAgIEZsYWcgd2hldGhlciBvciBub3QgdG8gcmVkcmF3IHBvaW50LiBUaGlzIGRlZmF1bHRzIHRvIHRydWUuXG4gICAqIEBwYXJhbSBzaGlmdCAgICAgICAgIFNoaWZ0IHBvaW50IHRvIHRoZSBzdGFydCBvZiBzZXJpZXMuIFRoaXMgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAqL1xuICBhZGRQb2ludChwb2ludDogUG9pbnQsIHNlcmllSW5kZXg6IG51bWJlciA9IDAsIHJlZHJhdzogYm9vbGVhbiA9IHRydWUsIHNoaWZ0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLnJlZiQuc3Vic2NyaWJlKGNoYXJ0ID0+IHtcbiAgICAgIGlmIChjaGFydC5zZXJpZXMubGVuZ3RoID4gc2VyaWVJbmRleCkge1xuICAgICAgICBjaGFydC5zZXJpZXNbc2VyaWVJbmRleF0uYWRkUG9pbnQocG9pbnQsIHJlZHJhdywgc2hpZnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBTZXJpZXNcbiAgICogQHBhcmFtIHNlcmllcyAgICAgICAgU2VyaWVzIENvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIHJlZHJhdyAgICAgICAgRmxhZyB3aGV0aGVyIG9yIG5vdCB0byByZWRyYXcgc2VyaWVzLiBUaGlzIGRlZmF1bHRzIHRvIHRydWUuXG4gICAqIEBwYXJhbSBhbmltYXRpb24gICAgIFdoZXRoZXIgdG8gYXBwbHkgYW5pbWF0aW9uLCBhbmQgb3B0aW9uYWxseSBhbmltYXRpb24gY29uZmlndXJhdGlvbi4gVGhpcyBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIGFkZFNlcmllcyhzZXJpZXM6IEhpZ2hjaGFydHMuU2VyaWVzT3B0aW9uc1R5cGUsIHJlZHJhdyA9IHRydWUsIGFuaW1hdGlvbjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMucmVmJC5zdWJzY3JpYmUoY2hhcnQgPT4ge1xuICAgICAgY2hhcnQuYWRkU2VyaWVzKHNlcmllcywgcmVkcmF3LCBhbmltYXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBQb2ludFxuICAgKiBAcGFyYW0gcG9pbnRJbmRleCAgICBJbmRleCBvZiBQb2ludFxuICAgKiBAcGFyYW0gc2VyaWVJbmRleCAgICBTcGVjaWZpZWQgSW5kZXggb2YgU2VyaWVzLiBEZWZhdWx0cyB0byAwLlxuICAgKi9cbiAgcmVtb3ZlUG9pbnQocG9pbnRJbmRleDogbnVtYmVyLCBzZXJpZUluZGV4ID0gMCk6IHZvaWQge1xuICAgIHRoaXMucmVmJC5zdWJzY3JpYmUoY2hhcnQgPT4ge1xuICAgICAgaWYgKGNoYXJ0LnNlcmllcy5sZW5ndGggPiBzZXJpZUluZGV4ICYmIGNoYXJ0LnNlcmllc1tzZXJpZUluZGV4XS5kYXRhLmxlbmd0aCA+IHBvaW50SW5kZXgpIHtcbiAgICAgICAgY2hhcnQuc2VyaWVzW3NlcmllSW5kZXhdLnJlbW92ZVBvaW50KHBvaW50SW5kZXgsIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBTZXJpZXNcbiAgICogQHBhcmFtIHNlcmllc0luZGV4ICAgIEluZGV4IHBvc2l0aW9uIG9mIHNlcmllcyB0byByZW1vdmUuXG4gICAqL1xuICByZW1vdmVTZXJpZXMoc2VyaWVzSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucmVmJC5zdWJzY3JpYmUoY2hhcnQgPT4ge1xuICAgICAgaWYgKGNoYXJ0LnNlcmllcy5sZW5ndGggPiBzZXJpZXNJbmRleCkge1xuICAgICAgICBjaGFydC5zZXJpZXNbc2VyaWVzSW5kZXhdLnJlbW92ZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXQoZWw6IEVsZW1lbnRSZWYpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVmKSB7XG4gICAgICBIaWdoY2hhcnRzLmNoYXJ0KGVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMub3B0aW9ucywgY2hhcnQgPT4ge1xuICAgICAgICBpZiAoIXRoaXMucmVmKSB7IC8vIFRPRE86IHdvcmthcm91bmQgZm9yIGRvdWJsZWQgY2FsbGJhY2tzIG9uIGV4cG9ydGluZyBjaGFydHM6IGlzc3VlICMyMzhcbiAgICAgICAgICB0aGlzLnJlZlN1YmplY3QubmV4dChjaGFydCk7XG4gICAgICAgICAgdGhpcy5yZWYgPSBjaGFydDtcbiAgICAgICAgICB0aGlzLnJlZlN1YmplY3QuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWYpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMucmVmLm9wdGlvbnM7XG4gICAgICB0aGlzLnJlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLnJlZiA9IHVuZGVmaW5lZDtcblxuICAgICAgLy8gbmV3IGluaXQgc3ViamVjdFxuICAgICAgdGhpcy5yZWZTdWJqZWN0ID0gbmV3IEFzeW5jU3ViamVjdCgpO1xuICAgICAgdGhpcy5yZWYkID0gdGhpcy5yZWZTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgfVxufVxuIl19