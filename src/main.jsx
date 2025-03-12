import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardLayout } from './components/DashboardLayout';
import { LoadingScreen } from './components/LoadingScreen';
import { AppProviders } from './context/AppProviders';
import { Account } from './routes/Account';
import { Analytics } from './routes/Analytics';
import { Changelog } from './routes/Changelog';
import { Charts } from './routes/Charts';
import { Checkout } from './routes/Checkout';
import { Directory } from './routes/Directory';
import { Error404 } from './routes/Error404';
import { Events } from './routes/Events';
import { Home } from './routes/Home';
import { Homepage } from './routes/Homepage';
import { Landing } from './routes/Landing';
import { Login } from './routes/Login';
import { Orders } from './routes/Orders';
import { Register } from './routes/Register';
import { GettingStarted } from './routes/GettingStarted';
import { GettingStartedQuestions } from './routes/GettingStartedQuestions';
import { Speakers } from './routes/Speakers';
import { CloudProviderComparison } from './routes/CloudProviderComparison';
import { GeneratedSpecs } from './routes/GeneratedSpecs';
import { CreatingCloud } from './routes/CreatingCloud';
import { CloudTemplateOutput } from './routes/CloudTemplateOutput';
import { OptimizeCloud } from './routes/OptimizeCloud';
import { OptimizeSignToCloud } from './routes/OptimizeSignToCloud';
import { FindingOptimizationsLoader } from './routes/FindingOptimizationsLoader';
import { CostAnalysis } from './routes/CostAnalysis';
import OptimizationResultReport from './routes/OptimizationResultReport';
import ApplyOptimimizationsLoader from './routes/ApplyOptimizationsLoader';
import ApplyOptimizationsFinish from './routes/ApplyOptimizationsFinish';
import AppliedOptimizationReport from './routes/AppliedOptimizationReport';
import MonitorVms from './routes/MonitorVms';
import SingleMonitorVm from './routes/SingleMonitorVm';
import CloudCostHistory from './routes/CloudCostHistory';
import Settings from './routes/Settings';
import FirstQuestion from './routes/questions/FirstQuestion';
import SecondQuestion from './routes/questions/SecondQuestion';
import ThirdQuestion from './routes/questions/ThirdQuestion';
import FourthQuestion from './routes/questions/FourthQuestion';
import FifthQuestion from './routes/questions/FifthQuestion';
import CloudTemplate from './routes/CloudTemplate';
import CloudTemplateDetails from './routes/CloudTemplateDetails';
import DeployApp from './routes/DeployApp';
import ManuallyDeployApp from './routes/ManuallyDeployApp';
import DeployingLoader from './routes/DeployingLoader';
import AppDeployFinish from './routes/AppDeployFinish';
import CiCdDeployApp from './routes/CiCdDeployApp';
import AppDeployCiCdFinish from './routes/AppDeployCiCdFinish';
export const ALL_ROUTES = [
  {
    path: '/',
    element: <Homepage />,
  },

  {
    path: '/landing',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/changelog',
    element: <Changelog />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'getting-started',
        element: <GettingStarted />,
      },
      {
        path: 'getting-started/questions',
        element: <GettingStartedQuestions />,
      },
      {
        path: 'getting-started/questions/first-question',
        element: <FirstQuestion />,
      },
      {
        path: 'getting-started/questions/second-question',
        element: <SecondQuestion />,
      },
      {
        path: 'getting-started/questions/third-question',
        element: <ThirdQuestion />,
      },
      {
        path: 'getting-started/questions/fourth-question',
        element: <FourthQuestion />,
      },
      {
        path: 'getting-started/questions/fifth-question',
        element: <FifthQuestion />,
      },
      {
        path: 'optimize-sign-to-cloud',
        element: <OptimizeSignToCloud />,
      },
      {
        path: 'apply-optimizations-finish',
        element: <ApplyOptimizationsFinish />,
      },
      {
        path: 'cloud-template',
        element: <CloudTemplate />,
      },
      {
        path: 'cloud-template/deploy-app',
        element: <DeployApp />,
      },
      {
        path: 'cloud-template/deploy-app/manual',
        element: <ManuallyDeployApp />,
      },
      {
        path: 'cloud-template/deploy-app/ci-cd',
        element: <CiCdDeployApp />,
      },
      {
        path: 'cloud-template/deploy-app/manual/finish',
        element: <AppDeployFinish />,
      },
      {
        path: 'cloud-template/deploy-app/ci-cd/finish',
        element: <AppDeployCiCdFinish />,
      },
      {
        path: 'cloud-template/deploy-app/deploying-loader',
        element: <DeployingLoader />,
      },
      {
        path: 'cloud-template/details',
        element: <CloudTemplateDetails />,
      },
      {
        path: 'cloud-cost-history',
        element: <CloudCostHistory />,
      },
      {
        path: 'generated-specs',
        element: <GeneratedSpecs />,
      },
      {
        path: 'creating-cloud',
        element: <CreatingCloud />,
      },
      {
        path: 'finding-optimizations',
        element: <FindingOptimizationsLoader />,
      },
      {
        path: 'apply-optimizations',
        element: <ApplyOptimimizationsLoader />,
      },
      {
        path: 'applied-optimization-report',
        element: <AppliedOptimizationReport />,
      },
      {
        path: 'optimize-cloud',
        element: <OptimizeCloud />,
      },
      {
        path: 'cost-analysis',
        element: <CostAnalysis />,
      },
      {
        path: 'monitor-vms',
        element: <MonitorVms />,
      },
      {
        path: 'single-monitor-vm',
        element: <SingleMonitorVm />,
      },
      {
        path: 'cloud-provider-comparison',
        element: <CloudProviderComparison />,
      },
      {
        path: 'optimization-result-report',
        element: <OptimizationResultReport />,
      },
      {
        path: 'cloud-template-output',
        element: <CloudTemplateOutput />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'speakers',
        element: <Speakers />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: 'account',
        element: <Account />,
      },
      {
        path: 'charts',
        element: <Charts />,
      },
      {
        path: 'directory',
        element: <Directory />,
      },
    ],
  },
  // add a 404 route
  {
    path: '*',
    element: <Error404 />,
  },
];
const router = createBrowserRouter(ALL_ROUTES);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProviders>
      <React.Suspense fallback={<LoadingScreen />}>
        <RouterProvider router={router} />
      </React.Suspense>
    </AppProviders>
  </React.StrictMode>,
);
