import { ChartConfiguration, ChartData, ChartType, TooltipItem, GridLineOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Vẫn cần import plugin ở đây

// --- Cấu hình cho Doughnut Chart ---
export const DOUGHNUT_CHART_LABELS: string[] = [ 'Đăng ký đất đai', 'Tài nguyên và môi trường', 'Thanh tra', 'Dữ liệu lĩnh vực', 'Địa chất và khoáng sản', 'Tổ chức cán bộ', 'Dữ liệu khác' ];

export const DOUGHNUT_CHART_INITIAL_DATA: ChartData<'doughnut'> = {
  labels: DOUGHNUT_CHART_LABELS,
  datasets: [
    {
      data: [300, 10, 10, 10, 10, 10, 10], // Dữ liệu cứng ban đầu
      backgroundColor: ['#4CAF50', '#FFC107', '#8BC34A', '#2196F3', '#795548', '#607D8B', '#9E9E9E'],
      borderColor: '#ffffff',
      borderWidth: 4,
      hoverBorderWidth: 5,
      hoverBackgroundColor: ['#388E3C','#FFA000','#689F38','#1976D2','#5D4037','#455A64','#757575'],
      hoverBorderColor: '#ffffff'
    }
  ]
};

export const DOUGHNUT_CHART_TYPE: ChartType = 'doughnut';

export const DOUGHNUT_CHART_OPTIONS: ChartConfiguration<'doughnut'>['options'] = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '50%',
  plugins: {
    legend: {
      display: true,
      position: 'right',
      align: 'center',
      labels: {
        usePointStyle: true,
        pointStyle: 'rect',
        boxWidth: 12,
        boxHeight: 12,
        padding: 15,
        font: { size: 12, family: 'Arial, sans-serif' }
      },
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: function(context: TooltipItem<'doughnut'>) {
          let label = context.label || '';
          if (label) { label += ': '; }
          if (context.parsed !== null) { label += context.parsed.toLocaleString(); }
          return label;
        }
      }
    }
  }
};

// --- Cấu hình cho Bar Chart ---
export const BAR_CHART_LABELS: string[] = ['Huyện Quỳnh Phụ', 'Huyện Tiên Hải', 'Huyện Vũ Thư', 'Huyện Thanh Trì', 'Huyện Đông Hưng', 'Đơn vị hành chính khác'];
const BAR_CHART_COLORS: string[] = ['#38761d', '#f1c232', '#6aa84f', '#4a86e8', '#783f04', '#cccccc']

export const BAR_CHART_INITIAL_DATA: ChartData<'bar'> = {
  labels: BAR_CHART_LABELS,
  datasets: [
    {
      data: [900, 400, 380, 430, 280, 320], // Dữ liệu cứng ban đầu
      label: 'Số lượng', // Giữ lại label nếu bạn muốn
      backgroundColor: BAR_CHART_COLORS,
      barThickness: 40,
      borderRadius: 5,
    }
  ]
};

export const BAR_CHART_TYPE: ChartType = 'bar';

export const BAR_CHART_OPTIONS: ChartConfiguration<'bar'>['options'] = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: { display: false },
      ticks: { font: { size: 12, family: 'Arial, sans-serif' } }
    },
    y: {
      beginAtZero: true,
       grid: { color: '#e9ecef', borderDash: [3, 3] } as Partial<GridLineOptions>,
      ticks: {
        font: { size: 12, family: 'Arial, sans-serif' },
        stepSize: 20000,
        callback: function(value) {
          if (typeof value === 'number' && value >= 1000) { return (value / 1000).toLocaleString() + 'K'; }
          return value.toLocaleString();
        }
      }
    }
  },
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: true,
        pointStyle: 'rect',
        boxWidth: 12,
        padding: 20,
        font: { size: 13, family: 'Arial, sans-serif' }
      }
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: function(context: TooltipItem<'bar'>) {
          let label = context.dataset.label || context.label || ''; // Sửa để lấy label của dataset trước
          if (label && context.dataset.label) { label += ': '; } // Chỉ thêm dấu : nếu có dataset.label
          else if (label && !context.dataset.label) { label = ''; } // Nếu không có dataset.label, thì không hiển thị label này

          if (context.parsed.y !== null) {
            label += context.parsed.y.toLocaleString();
          }
          return label;
        }
      }
    },
    datalabels: {
      anchor: 'end',
      align: 'end',
      offset: -4,
      color: '#555',
      font: { weight: 'normal', size: 11 },
      formatter: (value) => { return value.toLocaleString(); }
    }
  }
};

// Plugin cho Chart.js
export const CHART_PLUGINS = [ChartDataLabels];