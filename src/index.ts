import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);

const summary2 = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
summary2.buildAndPrintReport(matchReader.matches);

const summary3 = Summary.winsAnalysisWithHtmlReport('Man United');
summary3.buildAndPrintReport(matchReader.matches);
