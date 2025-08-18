import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule, DecimalPipe, PercentPipe } from '@angular/common'; // Import DecimalPipe, PercentPipe
import { BaseChartDirective } from 'ng2-charts'; // Import NgChartsModule
import { ChartConfiguration, ChartData, ChartType, TooltipItem } from 'chart.js'; // Import các kiểu cần thiết từ chart.js
import { DOUGHNUT_CHART_LABELS, DOUGHNUT_CHART_INITIAL_DATA, DOUGHNUT_CHART_OPTIONS, DOUGHNUT_CHART_TYPE, BAR_CHART_INITIAL_DATA, BAR_CHART_LABELS, BAR_CHART_OPTIONS, BAR_CHART_TYPE, CHART_PLUGINS } from './main-page-charts';

@Component({
  selector: 'app-main-page',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  providers: [ DecimalPipe, PercentPipe]
})
export class MainPageComponent implements OnInit { // Bỏ AfterViewInit nếu không dùng đến
  dataCategories =[
    { name: 'Đất đai', icon: 'assets/icons/dat-dai.png', count: 91909 },
    { name: 'Tài nguyên nước', icon: 'assets/icons/tai-nguyen-nuoc.png', count: 91909 },
    { name: 'Môi trường', icon: 'assets/icons/moi-truong.png', count: 91909 },
    { name: 'Địa chất và khoáng sản', icon: 'assets/icons/dia-chat.png', count: 91909 },
    { name: 'Khí tượng thủy văn', icon: 'assets/icons/khi-tuong.png', count: 91909 },
    { name: 'Biến đổi khí hậu', icon: 'assets/icons/bien-doi-khi-hau.png', count: 91909, shortName: 'DCC' },
    { name: 'Đo đạc và bản đồ', icon: 'assets/icons/do-dac.png', count: 91909 },
    { name: 'Thanh tra, kiểm tra', icon: 'assets/icons/thanh-tra.png', count: 91909 },
    { name: 'VBQPPL của Sở', icon: 'assets/icons/vbqppl.png', count: 91909 },
    { name: 'Dữ liệu khác', icon: 'assets/icons/du-lieu-khac.png', count: 91909 }
  ];

  public doughnutChartLabels: string[] = DOUGHNUT_CHART_LABELS;
  public doughnutChartData: ChartData<'doughnut'> = { ...DOUGHNUT_CHART_INITIAL_DATA }; // Sử dụng spread để tạo bản sao, dễ cập nhật sau này
  public readonly doughnutChartType: 'doughnut' = 'doughnut';
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = DOUGHNUT_CHART_OPTIONS;
  public doughnutCenterTextValue: number = 90;

  // Bar Chart
  public barChartLabels: string[] = BAR_CHART_LABELS;
  public barChartData: ChartData<'bar'> = { ...BAR_CHART_INITIAL_DATA }; // Sử dụng spread
  public readonly barChartType: 'bar' = 'bar';
  public barChartOptions: ChartConfiguration<'bar'>['options'] = BAR_CHART_OPTIONS;
  public chartPlugins = CHART_PLUGINS;
  public showCharts: boolean = false;

  constructor(private decimalPipe: DecimalPipe, private percentPipe: PercentPipe, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.showCharts = true;
    }
  }

  ngAfterViewInit(): void {

  }
}