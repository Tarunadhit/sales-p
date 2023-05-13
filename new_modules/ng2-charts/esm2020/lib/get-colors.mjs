import { baseColors } from './base-colors';
export const builtInDefaults = {
    plugins: { colors: { enabled: false } },
    datasets: {
        line: {
            backgroundColor: (context) => rgba(generateColor(context.datasetIndex), 0.4),
            borderColor: (context) => rgba(generateColor(context.datasetIndex), 1),
            pointBackgroundColor: (context) => rgba(generateColor(context.datasetIndex), 1),
            pointBorderColor: '#fff',
        },
        bar: {
            backgroundColor: (context) => rgba(generateColor(context.datasetIndex), 0.6),
            borderColor: (context) => rgba(generateColor(context.datasetIndex), 1)
        },
        get radar() {
            return this.line;
        },
        doughnut: {
            backgroundColor: (context) => rgba(generateColor(context.dataIndex), 0.6),
            borderColor: '#fff'
        },
        get pie() {
            return this.doughnut;
        },
        polarArea: {
            backgroundColor: (context) => rgba(generateColor(context.dataIndex), 0.6),
            borderColor: (context) => rgba(generateColor(context.dataIndex), 1),
        },
        get bubble() {
            return this.doughnut;
        },
        get scatter() {
            return this.doughnut;
        },
        get area() {
            return this.polarArea;
        }
    }
};
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors
 */
function generateColor(index = 0) {
    return baseColors[index] || getRandomColor();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNvbG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1jaGFydHMvc3JjL2xpYi9nZXQtY29sb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHO0lBQzdCLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBQztJQUNyQyxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUU7WUFDSixlQUFlLEVBQUUsQ0FBQyxPQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNqRixXQUFXLEVBQUUsQ0FBQyxPQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMzRSxvQkFBb0IsRUFBRSxDQUFDLE9BQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BGLGdCQUFnQixFQUFFLE1BQU07U0FDekI7UUFDRCxHQUFHLEVBQUU7WUFDSCxlQUFlLEVBQUUsQ0FBQyxPQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNqRixXQUFXLEVBQUUsQ0FBQyxPQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM1RTtRQUNELElBQUksS0FBSztZQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsZUFBZSxFQUFFLENBQUMsT0FBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDOUUsV0FBVyxFQUFFLE1BQU07U0FDcEI7UUFDRCxJQUFJLEdBQUc7WUFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQztRQUNELFNBQVMsRUFBRTtZQUNULGVBQWUsRUFBRSxDQUFDLE9BQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQzlFLFdBQVcsRUFBRSxDQUFDLE9BQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3pFO1FBQ0QsSUFBSSxNQUFNO1lBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxJQUFJLE9BQU87WUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQztRQUNELElBQUksSUFBSTtZQUNOLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsU0FBUyxJQUFJLENBQUMsTUFBcUIsRUFBRSxLQUFhO0lBQ2hELE9BQU8sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUN4RCxDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsR0FBVyxFQUFFLEdBQVc7SUFDNUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDM0QsQ0FBQztBQUVELFNBQVMsY0FBYztJQUNyQixPQUFPLENBQUUsWUFBWSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUUsQ0FBQztBQUM5RSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGFBQWEsQ0FBQyxLQUFLLEdBQUcsQ0FBQztJQUM5QixPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxjQUFjLEVBQUUsQ0FBQztBQUMvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmFzZUNvbG9ycyB9IGZyb20gJy4vYmFzZS1jb2xvcnMnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjaGFydC5qcyc7XG5cbmV4cG9ydCBjb25zdCBidWlsdEluRGVmYXVsdHMgPSB7XG4gIHBsdWdpbnM6IHsgY29sb3JzOiB7ZW5hYmxlZDogZmFsc2UgfX0sXG4gIGRhdGFzZXRzOiB7XG4gICAgbGluZToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAoY29udGV4dDogYW55KSA9PiByZ2JhKGdlbmVyYXRlQ29sb3IoY29udGV4dC5kYXRhc2V0SW5kZXgpLCAwLjQpLFxuICAgICAgYm9yZGVyQ29sb3I6IChjb250ZXh0OiBhbnkpID0+IHJnYmEoZ2VuZXJhdGVDb2xvcihjb250ZXh0LmRhdGFzZXRJbmRleCksIDEpLFxuICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IChjb250ZXh0OiBhbnkpID0+IHJnYmEoZ2VuZXJhdGVDb2xvcihjb250ZXh0LmRhdGFzZXRJbmRleCksIDEpLFxuICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNmZmYnLFxuICAgIH0sXG4gICAgYmFyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IChjb250ZXh0OiBhbnkpID0+IHJnYmEoZ2VuZXJhdGVDb2xvcihjb250ZXh0LmRhdGFzZXRJbmRleCksIDAuNiksXG4gICAgICBib3JkZXJDb2xvcjogKGNvbnRleHQ6IGFueSkgPT4gcmdiYShnZW5lcmF0ZUNvbG9yKGNvbnRleHQuZGF0YXNldEluZGV4KSwgMSlcbiAgICB9LFxuICAgIGdldCByYWRhcigpOiB7W2tleTogc3RyaW5nXTogKChjb250ZXh0OiBhbnkpID0+IENvbG9yKSB8IENvbG9yIH0ge1xuICAgICAgcmV0dXJuIHRoaXMubGluZTtcbiAgICB9LFxuICAgIGRvdWdobnV0OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IChjb250ZXh0OiBhbnkpID0+IHJnYmEoZ2VuZXJhdGVDb2xvcihjb250ZXh0LmRhdGFJbmRleCksIDAuNiksXG4gICAgICBib3JkZXJDb2xvcjogJyNmZmYnXG4gICAgfSxcbiAgICBnZXQgcGllKCk6IHtba2V5OiBzdHJpbmddOiAoKGNvbnRleHQ6IGFueSkgPT4gQ29sb3IpIHwgQ29sb3IgfSB7XG4gICAgICByZXR1cm4gdGhpcy5kb3VnaG51dDtcbiAgICB9LFxuICAgIHBvbGFyQXJlYToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAoY29udGV4dDogYW55KSA9PiByZ2JhKGdlbmVyYXRlQ29sb3IoY29udGV4dC5kYXRhSW5kZXgpLCAwLjYpLFxuICAgICAgYm9yZGVyQ29sb3I6IChjb250ZXh0OiBhbnkpID0+IHJnYmEoZ2VuZXJhdGVDb2xvcihjb250ZXh0LmRhdGFJbmRleCksIDEpLFxuICAgIH0sXG4gICAgZ2V0IGJ1YmJsZSgpOiB7W2tleTogc3RyaW5nXTogKChjb250ZXh0OiBhbnkpID0+IENvbG9yKSB8IENvbG9yIH0ge1xuICAgICAgcmV0dXJuIHRoaXMuZG91Z2hudXQ7XG4gICAgfSxcbiAgICBnZXQgc2NhdHRlcigpOiB7W2tleTogc3RyaW5nXTogKChjb250ZXh0OiBhbnkpID0+IENvbG9yKSB8IENvbG9yIH0ge1xuICAgICAgcmV0dXJuIHRoaXMuZG91Z2hudXQ7XG4gICAgfSxcbiAgICBnZXQgYXJlYSgpOiB7W2tleTogc3RyaW5nXTogKChjb250ZXh0OiBhbnkpID0+IENvbG9yKSB8IENvbG9yIH0ge1xuICAgICAgcmV0dXJuIHRoaXMucG9sYXJBcmVhO1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gcmdiYShjb2xvdXI6IEFycmF5PG51bWJlcj4sIGFscGhhOiBudW1iZXIpOiBDb2xvciB7XG4gIHJldHVybiAncmdiYSgnICsgY29sb3VyLmNvbmNhdChhbHBoYSkuam9pbignLCcpICsgJyknO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCk6IG51bWJlcltdIHtcbiAgcmV0dXJuIFsgZ2V0UmFuZG9tSW50KDAsIDI1NSksIGdldFJhbmRvbUludCgwLCAyNTUpLCBnZXRSYW5kb21JbnQoMCwgMjU1KSBdO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGNvbG9yc1xuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbG9yKGluZGV4ID0gMCk6IG51bWJlcltdIHtcbiAgcmV0dXJuIGJhc2VDb2xvcnNbaW5kZXhdIHx8IGdldFJhbmRvbUNvbG9yKCk7XG59XG4iXX0=