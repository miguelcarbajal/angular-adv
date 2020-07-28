import { Component, Input } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent {

  @Input()
  title: string = 'No title provided'
  @Input()
  labels: Array<Label>
  @Input()
  data: MultiDataSet

  // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData: MultiDataSet = [
  //   [350, 450, 100]
  // ];
  public colors: Array<Color> = [
    { backgroundColor: ['#12c2e9', '#c471ed', '#f64f59'] }
  ]

}
